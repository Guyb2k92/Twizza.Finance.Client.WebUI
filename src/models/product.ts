import { ProductFlavour } from './product-flavour';
import { UnitOfMeasure } from './unit-of-measure';
import { DealLine } from './deal-line';
import { ProductCategory } from './product-category';
import { ProductResponsibilityCentre } from './product-responsibility-centre';
import { CompulsoryOrderLineTypes } from './compulsory-order-line';

export class Product {
  Id: number;
  ProductCategoryId: number;
  UnitOfMeasureId: number;
  ProductFlavourId: number;
  Size: number;
  PackSize: number;
  Description: string;
  ThumbnailImage: any; //
  CasesPerLayer: number; //
  LayersPerPallet: number; //
  RequiresLayerBoard: boolean; //
  ProductFlavour: ProductFlavour;
  UnitOfMeasure: UnitOfMeasure;
  ProductCategory: ProductCategory;
  ProductResponsibilityCentres: ProductResponsibilityCentre[] = [];
  MinimumOrderQuantity: number;
  CrateType?: CompulsoryOrderLineTypes;

  DealLine?: DealLine;
  LastPackDealPrice: string = 'N/A';
  NoPricing = false;
  NeedsApproval = false;
  PricingError = null;

  HasLowerDealPrice = false;
  ListPriceError: string = null;

  constructor();
  constructor(src: Product);
  constructor(src?: Product) {
    if (src) {
      this.Id = src.Id;
      this.ProductCategoryId = src.ProductCategoryId;
      this.UnitOfMeasureId = src.UnitOfMeasureId;
      this.ProductFlavourId = src.ProductFlavourId;
      this.PackSize = src.PackSize;
      this.Size = src.Size;
      this.Description = src.Description;
      this.ThumbnailImage = src.ThumbnailImage;
      this.CasesPerLayer = src.CasesPerLayer;
      this.LayersPerPallet = src.LayersPerPallet;
      this.RequiresLayerBoard = src.RequiresLayerBoard;
      this.MinimumOrderQuantity = src.MinimumOrderQuantity;
      this.CrateType = src.CrateType;

      if (src.ProductCategory) {
        this.ProductCategory = new ProductCategory(src.ProductCategory);
      }
      if (src.ProductFlavour) {
        this.ProductFlavour = new ProductFlavour(src.ProductFlavour);
      }
      if (src.UnitOfMeasure) {
        this.UnitOfMeasure = new UnitOfMeasure(src.UnitOfMeasure);
      }

      if (src.ProductResponsibilityCentres && src.ProductResponsibilityCentres.length > 0) {
        src.ProductResponsibilityCentres.forEach((prc) => {
          this.ProductResponsibilityCentres.push(new ProductResponsibilityCentre(prc));
        });
      }
    } else {
      this.Id = 0;
    }
  }
}
