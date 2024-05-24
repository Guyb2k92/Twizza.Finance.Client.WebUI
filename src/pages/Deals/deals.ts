import { NavDimension, NavDimensionCode } from '../../models/nav-dimensions';
import { Store, connectTo } from '@aurelia/store-v1';
import { cycleDealColumns, listDealColumns } from './../../config/table-config';

import { Datatable } from 'mdb-ui-kit';
import { Deal } from '../../models/deal';
import DealsService from '../../services/deals-service';
import { State } from 'src/state';
import { inject } from 'aurelia';

@inject(DealsService, Store)
@connectTo<State>()
export class Deals {
    constructor(
        private dealsService: DealsService,
        private store: Store<State>,
    ) {
        this.cycleDealColumns = cycleDealColumns;
        this.listDealColumns = listDealColumns;
    }
    cycleDealColumns;
    listDealColumns;
    public state: State;
    dataTable: Datatable;
    dataCollected: boolean = false;
    activeDealType: string = 'cycle';
    activeFilter: string;
    activePage: number = 0;
    dealType: string;

    filterList = ['All', 'Approved', 'Rejected', 'Awaiting Approval', 'Lapsed', 'Draft', 'Expired', 'Active'];
    basicData = {
        columns: [],
        rows: [],
    };

    customerDimensions: NavDimension[] = [];

    attached() {
        this.loadData();
        this.getCategories();
    }

    async loadData() {
        let table = document.getElementById('datatable-clickable-rows');
        table.addEventListener('rowClick.mdb.datatable', e => {
            this.tableRowClicked(e);
        });

        this.dataTable = new Datatable(
            table,
            {
                columns: this.basicData.columns,
            },
            { loading: true },
        );

        await this.getDimensions();
        await this.getDeals();

        this.dataTable.update(
            {
                columns: this.basicData.columns,
                rows: this.basicData.rows.map(deal => ({
                    ...deal,
                })),
            },
            { loading: false },
        );
    }

    async tableRowClicked(e) {
        if (e !== undefined) {
            const dealHeader = this.basicData.rows[e.index];
            const data = await this.dealsService.getDeal(dealHeader?.id, dealHeader?.dealType);
        } else {
            return;
        }
    }

    async getDimensions() {
        this.customerDimensions = this.state.customerDimensions;
    }

    async getDeals(status?: string) {
        this.basicData.rows = [];
        if (status === 'All') status = null;
        const response = await this.dealsService.getDeals(false, this.activeDealType, status, null, 1, this.activePage, 100);
        this.dataTable.update({ loading: true });
        if (this.activeDealType === 'cycle') {
            response.forEach((element: Deal) => {
                const data = {
                    Status: element.Status,
                    validFrom: element.ValidFrom.toString(),
                    validTo: element.ValidTo.toString(),
                    channelCode: this.findDim(element.ChannelCode, 'CHANNEL'),
                    salesCode: this.findDim(element.SalesRegionCode, 'SALES_REGION'),
                    holdingCompanyCode: this.findDim(element.HoldingCompCode, 'CUST_HOLD_COMP'),
                    groupCode: this.findDim(element.GroupCode, 'CUSTGROUP'),
                    bannerCode: this.findDim(element.BannerCode, 'CUSTOMER_BANNER'),
                    customerTypeCode: this.findDim(element.CustomerTypeCode, 'CUSTOMER_ACC_TYPE'),
                    firstName: element.CreatorUser?.FirstName,
                    creatorFirstName: element.AuthorisedUser?.FirstName,
                    authorisedTime: element.AuthorisedTime,
                    id: element.Id,
                    dealType: element.DealType,
                };
                this.basicData.columns = this.cycleDealColumns;
                this.basicData.rows.push(data);
            });
        } else {
            response.forEach((element: Deal) => {
                const data = {
                    Status: element.Status,
                    validFrom: element.ValidFrom.toString(),
                    validTo: element.ValidTo.toString(),
                    createdDate: element.CreatedTime,
                    firstName: element.CreatorUser?.FirstName,
                    creatorFirstName: element.AuthorisedUser?.FirstName,
                    authorisedTime: element.AuthorisedTime,
                    id: element.Id,
                    dealType: element.DealType,
                };
                this.basicData.columns = this.listDealColumns;
                this.basicData.rows.push(data);
            });
        }
        this.updateDataTable();
    }

    async getCategories() {
        this.dealsService.getProductCategories(1);
    }

    findDim(dimType: string, dimCode: NavDimensionCode) {
        const dim = this.customerDimensions.find(x => {
            return x.DimensionCode === dimCode && x.DimensionValueCode === dimType;
        });
        return dim?.DisplayValue;
    }

    async setActiveDealType(button: string) {
        this.activeDealType = button;
        await this.getDeals();
    }

    updateDataTable() {
        console.log('updatingDtable');
        this.dataTable.update(this.basicData);
    }
}
