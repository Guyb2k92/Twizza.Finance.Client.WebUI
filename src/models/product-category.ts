import { Product } from './product';
import { Brand } from './brand';

export class ProductCategory {
  Id: number;
  Name: string;
  BrandId: number;

  Brand: Brand;
  Products: Product[] = [];

  constructor();
  constructor(src: ProductCategory);
  constructor(src?: ProductCategory) {
    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.BrandId = src.BrandId;

      if (src.Brand) {
        this.Brand = new Brand(src.Brand);
      }

      if (src.Products && src.Products.length > 0) {
        src.Products.forEach((product) => this.Products.push(new Product(product)));
      }
    } else {
      this.Id = 0;
    }
  }
}

export class ProductCategoryDisplay extends ProductCategory {
  visible: boolean;
  DealPackPrice: number; //Not on  Model
  LastPackDealPrice: string; // Not on Model
  NoPricing = false;
  NeedsApproval = false;
  PricingError = null;

  HasLowerDealPrice = false;
  ListPriceError: string = null;

  constructor(cat: ProductCategory | ProductCategoryDisplay) {
    super(cat);
    this.visible = cat instanceof ProductCategoryDisplay ? cat.visible : false;
    this.DealPackPrice = cat instanceof ProductCategoryDisplay ? cat.DealPackPrice : 0;
    this.LastPackDealPrice = cat instanceof ProductCategoryDisplay ? cat.LastPackDealPrice : '';
  }

  public get hasDeal(): boolean {
    return !!this.Products.find((p) => !!p.DealLine);
  }
}
