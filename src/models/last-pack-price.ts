export class LastPackPrice {
  ProductId: number;
  LastDealPackPrice: number;

  constructor();
  constructor(src: LastPackPrice);
  constructor(src?: LastPackPrice) {
    if (src) {
      this.ProductId = src.ProductId;
      this.LastDealPackPrice = src.LastDealPackPrice;
    }
  }
}
