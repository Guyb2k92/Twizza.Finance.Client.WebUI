import { Product } from './product';
import { ResponsibilityCentre } from './responsibility-centre';
import { NavItem } from './nav-item';

export class ProductResponsibilityCentre {
  Id: number;
  ProductId: number;
  ResponsibilityCentreId: number;
  ProductCode: string;
  IsDeleted: boolean;

  Product: Product;
  ResponsibilityCentre: ResponsibilityCentre;
  NavItem: NavItem;

  constructor();
  constructor(src: ProductResponsibilityCentre);
  constructor(src?: ProductResponsibilityCentre) {
    if (src) {
      this.Id = src.Id;
      this.ProductId = src.ProductId;
      this.ResponsibilityCentreId = src.ResponsibilityCentreId;
      this.ProductCode = src.ProductCode;
      this.IsDeleted = src.IsDeleted;

      if (src.ResponsibilityCentre) {
        this.ResponsibilityCentre = new ResponsibilityCentre(src.ResponsibilityCentre);
      }

      if (src.NavItem) {
        this.NavItem = new NavItem(src.NavItem);
      }
    }
  }
}
