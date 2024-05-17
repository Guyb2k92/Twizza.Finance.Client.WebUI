import moment from "moment";

export class QueryDocument {
  DocumentTypeId: number;
  TripId: number;
  WSNumber: string;
  CustomerName: string;
  Date: moment.Moment;
  DocumentToken: string;
  CustomerNumber: string;
  InvoiceNumber: string;
  OrderNumber: string;
  DriverName: string;
  VehicleReg: string;

  constructor();
  constructor(src: QueryDocument);
  constructor(src?: QueryDocument) {
    if (src) {
      this.WSNumber = src.WSNumber;
      this.CustomerName = src.CustomerName;
      this.Date = src.Date ? moment(src.Date) : null;
      this.DocumentToken = src.DocumentToken;
      this.CustomerNumber = src.CustomerNumber;
      this.InvoiceNumber = src.InvoiceNumber;
      this.OrderNumber = src.OrderNumber;
      this.DocumentTypeId = src.DocumentTypeId;
      this.TripId = src.TripId;
      this.DriverName = src.DriverName;
      this.VehicleReg = src.VehicleReg;
    }
  }

  public get DocumentType() {
    return this.DocumentTypeId == 20 ? "Electronic POD" : "Electronic Returns";
  }
}
