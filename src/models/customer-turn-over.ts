import moment from 'moment';

export class CustomerTurnOver {
  Company: string;
  CompanyId: number;
  SellToAccountNumber: string;
  PostingYear: number;
  PostingMonth: number;
  LastInvoiceDateForMonth: moment.Moment;
  Turnover: number;
  LastInvoiceValue: number;

  constructor();
  constructor(src: CustomerTurnOver);
  constructor(src?: CustomerTurnOver) {
    if (src) {
      this.Company = src.Company;
      this.CompanyId = src.CompanyId;
      this.SellToAccountNumber = src.SellToAccountNumber;
      this.PostingYear = src.PostingYear;
      this.PostingMonth = src.PostingMonth;
      this.LastInvoiceDateForMonth = src.LastInvoiceDateForMonth;
      this.Turnover = src.Turnover;
      this.LastInvoiceValue = src.LastInvoiceValue;
    }
  }
}
