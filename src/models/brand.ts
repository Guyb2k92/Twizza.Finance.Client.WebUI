﻿import { ProductCategory } from './product-category';
import { CompetitorProductMap } from './competitor-product-map';
import { Company } from './company';
import { ProductFlavour } from './product-flavour';

export class Brand {
  Id: number;
  Name: string;
  IsStockBrand: boolean;
  CompanyId: number;

  ProductCategories: ProductCategory[] = [];
  ProductFlavours: ProductFlavour[] = [];
  Company: Company;
  CompetitorProductCategories: CompetitorProductMap[] = [];

  constructor();
  constructor(src: Brand);
  constructor(src?: Brand) {
    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.IsStockBrand = src.IsStockBrand;
      this.CompanyId = src.CompanyId;

      if (src.ProductCategories && src.ProductCategories.length > 0) {
        src.ProductCategories.forEach((category) =>
          this.ProductCategories.push(new ProductCategory(category))
        );
      }

      if (src.ProductFlavours && src.ProductFlavours.length > 0) {
        src.ProductFlavours.forEach((flavour) =>
          this.ProductFlavours.push(new ProductFlavour(flavour))
        );
      }

      if (src.Company) {
        this.Company = new Company(src.Company);
      }

      if (src.CompetitorProductCategories && src.CompetitorProductCategories.length > 0) {
        src.CompetitorProductCategories.forEach((cp) => this.CompetitorProductCategories.push(cp));
      }
    }
  }
}
