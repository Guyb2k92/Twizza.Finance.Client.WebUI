import { CompulsoryOrderLineTypes, CompulsoryOrderLine } from './compulsory-order-line';
import { computedFrom } from 'aurelia-framework';

export class OrderLineCompulsory {
  Id: number;
  OrderId: number;
  ProductDescription: string;
  Quantity: number;
  UnitPriceExcl: number;
  LineItemTotalExcl: number;
  LineItemVat: number;
  LineItemTotalIncl: number;
  ItemCode: string;
  // PromotionCode: string;
  // UnitOfMeasure: string;
  IsDeleted: boolean;
  CompulsoryOrderLineType: CompulsoryOrderLineTypes;
  VatRate: number;
  CompulsoryOrderLineId: number;

  CompulsoryOrderLine?: CompulsoryOrderLine;

  constructor();
  constructor(src: OrderLineCompulsory);
  constructor(src?: OrderLineCompulsory) {
    if (src) {
      this.Id = src.Id;
      this.OrderId = src.OrderId;
      this.ProductDescription = src.ProductDescription;
      this.Quantity = src.Quantity;
      this.UnitPriceExcl = src.UnitPriceExcl;
      this.LineItemTotalExcl = src.LineItemTotalExcl;
      this.LineItemVat = src.LineItemVat;
      this.LineItemTotalIncl = src.LineItemTotalIncl;
      this.ItemCode = src.ItemCode;
      // this.PromotionCode = src.PromotionCode;
      // this.UnitOfMeasure = src.UnitOfMeasure;
      this.IsDeleted = src.IsDeleted;
      this.CompulsoryOrderLineType = src.CompulsoryOrderLineType;
      this.VatRate = src.VatRate;
      this.CompulsoryOrderLineId = src.CompulsoryOrderLineId;

      if (src.CompulsoryOrderLine) {
        this.CompulsoryOrderLine = new CompulsoryOrderLine(src.CompulsoryOrderLine);
      }
    }
  }

  @computedFrom('UnitPriceExcl', 'Quantity')
  get TotalLineComputed(): number {
    return this.UnitPriceExcl > 0 ? this.UnitPriceExcl * this.Quantity : 0;
  }

  @computedFrom('UnitPriceExcl')
  get DisplayUnitPriceExcl(): number {
    return this.UnitPriceExcl > 0 ? this.UnitPriceExcl : null;
  }
}
