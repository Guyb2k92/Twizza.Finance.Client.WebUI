﻿import { ValidationRules } from 'aurelia-validation';
import { Product } from './product';

export class DealLine {
  Id: number;
  DealId: number;
  ProductId: number;
  DealPackPrice: number;
  Product: Product;
  FlavourId: number;
  Size: number;
  UnitOfMeasureId: number;
  ProductCategoryId: number;
  PackSize: number;

  constructor();
  constructor(src: DealLine);
  constructor(src: Partial<DealLine>);
  constructor(src?: DealLine) {
    if (src) {
      this.Id = src.Id;
      this.DealId = src.DealId;
      this.ProductId = src.ProductId;
      this.DealPackPrice = src.DealPackPrice;
      this.FlavourId = src.FlavourId;
      this.Size = src.Size;
      this.UnitOfMeasureId = src.UnitOfMeasureId;
      this.ProductCategoryId = src.ProductCategoryId;
      this.PackSize = src.PackSize;
      
      if (this.Product) {
        this.Product = new Product(src.Product);
      }
    } else {
      this.Id = 0;
    }
  }
}

//prettier-ignore
ValidationRules
  .ensure((x: DealLine) => x.DealPackPrice).required().then().satisfies(value => value >= 0)
  .on(DealLine);
