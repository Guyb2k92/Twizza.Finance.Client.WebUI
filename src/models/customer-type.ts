export class CustomerType {
  CustomerTypeCode: string;
  CustomerTypeName: string;
  DisplayValue: string;
  CompanyId: number;

  constructor();
  constructor(src: CustomerType);
  constructor(src?: CustomerType) {
    if (src) {
      this.CustomerTypeCode = src.CustomerTypeCode;
      this.CustomerTypeName = src.CustomerTypeName;
      this.DisplayValue = src.DisplayValue;
      this.CompanyId = src.CompanyId;
    }
  }
}
