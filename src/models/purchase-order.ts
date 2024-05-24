import { PurchaseOrderLine } from './purchase-order-line';

export class PurchaseOrder {
    Id: number;
    PurchaseOrderNumber: string;
    VendorId: string;
    Vendor: string;
    LocationId: string;
    Location: string;
    Division: string;
    BUCode: string;
    BusinessUnit: string;
    Status: string;
    TotalExclVat: number;
    IsRecurringPurchase: boolean;
    OrderDate: string;
    Comments?: string;
    CreatedByUserID?: bigint;
    POLines: PurchaseOrderLine[];
}
