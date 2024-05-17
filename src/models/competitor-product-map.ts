import { Brand } from './brand';
import { ProductCategory } from './product-category';
import { UnitOfMeasure } from './unit-of-measure';

export class CompetitorProductMap {
  Id: number;
  BrandId: number;
  ProductCategoryId: number;
  Size: number;
  UnitOfMeasureId: number;

  Brand: Brand;
  Category: ProductCategory;
  UnitOfMeasure: UnitOfMeasure;
  //
  constructor();
  constructor(src: CompetitorProductMap);
  constructor(src?: CompetitorProductMap) {
    if (src) {
      this.Id = src.Id;
      this.BrandId = src.BrandId;
      this.ProductCategoryId = src.ProductCategoryId;
      this.Size = src.Size;
      this.UnitOfMeasureId = src.UnitOfMeasureId;

      if (src.Brand) {
        this.Brand = new Brand(src.Brand);
      }
      if (src.Category) {
        this.Category = new ProductCategory(src.Category);
      }
      if (src.UnitOfMeasure) {
        this.UnitOfMeasure = new UnitOfMeasure(src.UnitOfMeasure);
      }
    }
  }
}
