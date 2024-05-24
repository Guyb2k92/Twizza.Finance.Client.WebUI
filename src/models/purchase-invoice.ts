import { PurchaseOrder } from './purchase-order';

export class PurchaseInvoice {
    Id: number;
    // PurchaseOrderNumber:string;
    // VendorId:string
    // Vendor: string;
    LocationId: string;
    Location: string;
    Division: string;
    BUCode?: string;
    VendorInvoiceNo: string;
    Status: string;
    TotalExclVat?: number;
    TotalInlcVat?: number;
    PostingDate: string;
    DueDate: string;
    Comments?: string;
    CreatedByUserID?: bigint;
    POrder: PurchaseOrder;
}
