export class ProductFlavour {
  Id: number;
  Name: string;
  BrandId: number;

  constructor();
  constructor(src: ProductFlavour);
  constructor(src?: ProductFlavour) {
    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.BrandId = src.BrandId;
    } else {
      this.Id = 0;
    }
  }
}
