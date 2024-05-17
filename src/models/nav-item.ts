export class NavItem {
  ItemCode: string;
  Description: string;
  BaseUnitOfMeasure: string;
  UnitPrice: number;
  ProductGroupCode: string;
  CompanyId: number;
  Blocked: boolean;

  constructor();
  constructor(src: NavItem);
  constructor(src?: NavItem) {
    if (src) {
      this.ItemCode = src.ItemCode;
      this.Description = src.Description;
      this.BaseUnitOfMeasure = src.BaseUnitOfMeasure;
      this.UnitPrice = src.UnitPrice;
      this.ProductGroupCode = src.ProductGroupCode;
      this.CompanyId = src.CompanyId;
      this.Blocked = src.Blocked;
    }
  }
}
