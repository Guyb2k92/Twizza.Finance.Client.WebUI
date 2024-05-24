import { DataGridComponent, DataGridHeader } from '@twizzadev/twizza-common-webui';

import { PurchaseInvoice } from 'src/models/purchase-invoice';
import { PurchaseOrder } from 'src/models/purchase-order';

export class PurchaseOrders {
    POGrid: DataGridComponent;
    POHeaders: DataGridHeader[];
    filter: string;
    choseOrders = true;
    approvalsLoaded: boolean;
    selectedStatus: string = 'All';
    selectedPiStatus: string = 'All';
    poStatuses: string[] = [];
    piStatuses: string[] = [];
    poInfo: PurchaseOrder[] = [
        {
            Id: 1245,
            PurchaseOrderNumber: 'P-ORD8000002',
            VendorId: '124',
            Vendor: 'BADENHORST TRANSPORT',
            LocationId: 'MFD-LAKES',
            Location: 'JOHANNESBURG DEPOT',
            Status: 'Capture',
            BUCode: 'QT',
            OrderDate: new Date('02/02/2024').toLocaleDateString('en-eu', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            Division: 'FINANCE',
            IsRecurringPurchase: false,
            TotalExclVat: 3124231.23,
            POLines: [],
            BusinessUnit: 'QT',
        },
        {
            Id: 1245,
            PurchaseOrderNumber: 'P-ORD8000003',
            VendorId: '124',
            Vendor: 'BELTING SUPPLY SERVICES',
            LocationId: 'QFD-PE',
            Location: 'PORT ELIZABETH DEPOT',
            Status: 'Capture',
            BUCode: 'PE',
            OrderDate: new Date('23/05/2024').toLocaleDateString('en-eu', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            Division: 'FINANCE',
            IsRecurringPurchase: false,
            TotalExclVat: 2345.23,
            POLines: [],
            BusinessUnit: 'PE',
        },
    ];
    piInfo: PurchaseInvoice[] = [
        {
            Id: 1245,
            VendorInvoiceNo: 'INV457',
            LocationId: 'MFD-LAKES',
            Location: 'JOHANNESBURG DEPOT',
            Status: 'Capture',
            BUCode: 'QT',
            PostingDate: new Date('02/04/2024').toLocaleDateString('en-eu', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            Division: 'FINANCE',
            DueDate: new Date('02/05/2024').toLocaleDateString('en-eu', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            POrder: {
                Id: 1245,
                PurchaseOrderNumber: 'P-ORD8000003',
                VendorId: '124',
                Vendor: 'BELTING SUPPLY SERVICES',
                LocationId: 'QFD-PE',
                Location: 'PORT ELIZABETH DEPOT',
                Status: 'Capture',
                BUCode: 'PE',
                OrderDate: new Date('23/05/2024').toLocaleDateString('en-eu', { day: 'numeric', month: 'numeric', year: 'numeric' }),
                Division: 'FINANCE',
                IsRecurringPurchase: false,
                TotalExclVat: 2345.23,
                POLines: [],
                BusinessUnit: 'PE',
            },
        },
        //,{
        //   Id: 1245, PurchaseOrderNumber: 'P-ORD8000003', VendorId: '124', Vendor: 'BELTING SUPPLY SERVICES', LocationId: 'QFD-PE',
        //   Location: 'PORT ELIZABETH DEPOT', Status: 'Capture', BUCode: 'PE', OrderDate: new Date('23/05/2024').toLocaleDateString('en-eu',{day:'numeric',month:'numeric',year:'numeric'}), Division: 'FINANCE', IsRecurringPurchase: false, TotalExclVat: 2345.23, POLines: [], BusinessUnit: 'PE'
        // }
    ];

    constructor() {
        this.poStatuses = ['All', 'Capture', 'Submitted For Approval', 'PO Approved', 'PO Rejected', 'PO Submitted To Supplier'];

        this.piStatuses = ['All', 'Capture', 'Submitted For Approval', 'PI Approved', 'PI Rejected', 'Complete'];

        // this.poInfo = ;
    }

    // function createPurchaseOrder(po: PurchaseOrder): { color: string; area: number } {
    //   return {
    //     color: po.color || "red",
    //     area: po.width ? config.width * config.width : 20,
    //   };
    // }

    attached() {}

    reset() {
        this.POGrid.reset();
    }

    filterBy(filter: string) {
        this.selectedStatus = filter;
        this.reset();
    }
    filterPIBy(filter: string) {
        this.selectedStatus = filter;
        this.reset();
    }
    async getPOs(page: number, limit: number): Promise<PurchaseOrder[]> {
        try {
            let pOrders: PurchaseOrder[] = [];
            // for (const c of claims) {
            //   c.Status = this.claimStatuses.find((p) => p.Id == c.StatusId);
            // }

            return pOrders;
        } catch (err) {
            return [];
        } finally {
        }
    }
}
