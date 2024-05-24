import { Datatable, Datepicker } from 'mdb-ui-kit';

import DealsService from '../../services/deals-service';
import { inject } from 'aurelia';

@inject(DealsService)
export class CustomerPrice {
    constructor(private dealsService: DealsService) {}
    myDatepicker;
    dataTable;
    dataCollected = 0;
    basicData = {
        columns: [
            { label: 'Status', field: 'Status' },
            { label: 'From', field: 'validFrom' },
            { label: 'To', field: 'validTo' },
            { label: 'Channel', field: 'channelCode' },
            { label: 'Region', field: 'salesCode' },
            { label: 'Holding Co', field: 'holdingCompanyCode' },
            { label: 'Group', field: 'groupCode' },
            { label: 'Banner', field: 'bannerCode' },
            { label: 'Customer Type', field: 'customerTypeCode' },
            { label: 'Created By', field: 'firstName' },
            { label: 'Auth By', field: 'creatorFirstName' },
            { label: 'Auth Date', field: 'authorisedTime' },
        ],
        rows: [],
    };

    attached() {
        this.generateDatepicker();
        this.generateDataTable();
    }

    async tableRowClicked(e) {
        console.log(e);
    }

    generateDatepicker() {
        const options = {
            datepicker: { format: 'dd-mm-yyyy' },
        };
        this.myDatepicker = new Datepicker(document.getElementById('myDatetimepicker'), options);
    }

    generateDataTable() {
        this.dataTable = document.getElementById('datatable-customer-query');
        this.dataTable.addEventListener('rowClick.mdb.datatable', e => {
            this.tableRowClicked(e);
        });

        const datatableInstance = new Datatable(
            this.dataTable,
            {
                columns: this.basicData.columns,
            },
            { loading: false },
        );
    }
}
