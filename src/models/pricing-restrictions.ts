import { Product } from "./product";
import moment from "moment";

export class PricingRestriction {
  Id: number;
  CompanyId: number;
  EffectiveFrom: moment.Moment;
  EffectiveTo?: moment.Moment;
  DealType: string;
  Claim: string;
  ChannelCode?: string;
  RegionCode?: string;
  ProductId?: number;
  ProductCategoryId?: number;
  UnitOfMeasureId?: number;
  Size?: number;
  PackSize?: number;
  MinimumAmount: number;

  Product: Product;

  constructor();
  constructor(src: PricingRestriction);
  constructor(src?: PricingRestriction) {
    if (src) {
      this.Id = src.Id;
      this.CompanyId = src.CompanyId;
      this.EffectiveFrom = moment(src.EffectiveFrom);
      this.EffectiveTo = src.EffectiveTo ? moment(src.EffectiveTo) : null;
      this.DealType = src.DealType;
      this.Claim = src.Claim;
      this.ChannelCode = src.ChannelCode;
      this.RegionCode = src.RegionCode;
      this.ProductId = src.ProductId;
      this.ProductCategoryId = src.ProductCategoryId;
      this.UnitOfMeasureId = src.UnitOfMeasureId;
      this.Size = src.Size;
      this.PackSize = src.PackSize;
      this.MinimumAmount = src.MinimumAmount;

      if (src.Product) {
        this.Product = new Product(src.Product);
      }
    } else {
      this.Id = 0;
    }
  }

  public get Specificity(): number {
    if (!!this.RegionCode && !!this.ProductId) {
      return 1;
    }
    if (!!this.RegionCode) {
      return 2;
    }
    if (!!this.ProductId) {
      return 3;
    }

    return 4;
  }
}
