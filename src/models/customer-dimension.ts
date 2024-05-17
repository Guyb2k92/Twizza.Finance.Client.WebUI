import { NavDimensionCode } from './nav-dimensions';

export class CustomerDimension {
  DimensionCode: NavDimensionCode;
  DimensionValueCode: string;
  CustomerNo: string;
  CompanyId: number;
  CustomerId: number;

  constructor();
  constructor(src: Partial<CustomerDimension>);
  constructor(src?: Partial<CustomerDimension>) {
    if (src) {
      this.DimensionCode = src.DimensionCode;
      this.DimensionValueCode = src.DimensionValueCode;
      this.CustomerNo = src.CustomerNo;
      this.CompanyId = src.CompanyId;
      this.CustomerId = src.CustomerId;
    }
  }
}
