import { computedFrom } from 'aurelia-binding';
import { Product } from './product';

const UnitMaps = {
  'MSB': 'Litres',
  'MB50': 'Litres',
  'YB50': 'Litres',
};

export class OrderLine {
  Id: number;
  OrderId: number;
  ProductId: number;
  ProductDescription: string;
  Quantity: number;
  UnitListPriceExcl: number;
  UnitPriceExcl: number;
  LineItemTotalExcl: number;
  LineItemVat: number;
  LineItemTotalIncl: number;
  UnitTotal: number;
  PackSize: number;
  // UnitCode: number;
  ItemCode: string;
  IsDeleted: boolean;
  PromotionCode: string;
  // Type: any;
  VatRate: number;

  Product: Product;

  constructor();
  constructor(src: OrderLine);
  constructor(src?: OrderLine) {
    if (src) {
      this.Id = src.Id;
      this.OrderId = src.OrderId;
      this.ProductId = src.ProductId;
      this.ProductDescription = src.ProductDescription;
      this.Quantity = src.Quantity;
      this.UnitListPriceExcl = src.UnitListPriceExcl;
      this.UnitPriceExcl = src.UnitPriceExcl;
      this.LineItemTotalExcl = src.LineItemTotalExcl;
      this.LineItemVat = src.LineItemVat;
      this.LineItemTotalIncl = src.LineItemTotalIncl;
      this.UnitTotal = src.UnitTotal;
      this.PackSize = src.PackSize;
      this.ItemCode = src.ItemCode;
      this.IsDeleted = src.IsDeleted;
      this.PromotionCode = src.PromotionCode;
      this.VatRate = src.VatRate;

      if (src.Product) {
        this.Product = new Product(src.Product);
      }
    } else {
      this.IsDeleted = false;
      this.LineItemTotalExcl = 0;
      this.LineItemTotalIncl = 0;
      this.LineItemVat = 0;
      this.PackSize = 0;
      this.Quantity = 0;
      this.UnitListPriceExcl = 0;
      this.UnitPriceExcl = 0;
      this.UnitTotal = 0;
      this.VatRate = 0;
    }
  }

  @computedFrom('UnitPriceExcl', 'Quantity')
  get TotalLineComputed(): number {
    return this.UnitPriceExcl * this.Quantity;
  }

  @computedFrom('ItemCode')
  get Unit(): string {
    if (Object.keys(UnitMaps).includes(this.ItemCode)) {
      return UnitMaps[this.ItemCode];
    }

    return `${this.PackSize} Pack`;
  }
}
