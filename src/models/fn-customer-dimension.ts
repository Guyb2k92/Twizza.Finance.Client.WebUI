import { NavDimensionCode } from './nav-dimensions';

export class FN_CustomerDimension {
  DimensionCode: NavDimensionCode;
  DimensionValueCode: string;
  CompanyId: number;
  DisplayValue: string;
  ParentValueCode: string;

  constructor();
  constructor(src: Partial<FN_CustomerDimension>);
  constructor(src?: Partial<FN_CustomerDimension>) {
    if (src) {
      this.DimensionCode = src.DimensionCode;
      this.DimensionValueCode = src.DimensionValueCode;
      this.DisplayValue = src.DisplayValue;
      this.CompanyId = src.CompanyId;
      this.ParentValueCode = src.ParentValueCode;
    }
  }
}
