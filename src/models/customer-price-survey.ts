import { Brand } from './brand';
import { Customer } from './customer';
import { Outlet } from './outlet';
import { ProductCategory } from './product-category';
import { UnitOfMeasure } from './unit-of-measure';
import { UserAccount } from '@twizzadev/twizza-common-webui';
import moment from 'moment';

export class CustomerPriceSurvey {
  Id: number;
  CustomerId: number;
  BrandId: number;
  Price: number;
  ExpiryDate: moment.Moment;
  IsDeleted: boolean;
  Size: number;
  UnitOfMeasureId: number;
  ProductCategoryId: number;
  SurveyDate: moment.Moment;
  CreatorUserId: number;
  GroupId: string;
  OutletId: number;

  Customer: Customer;
  Brand: Brand;
  Category: ProductCategory;
  UnitOfMeasure: UnitOfMeasure;
  CreatorUser: UserAccount;
  Outlet: Outlet;

  constructor();
  constructor(src: CustomerPriceSurvey);
  constructor(src?: CustomerPriceSurvey) {
    if (src) {
      this.Id = src.Id;
      this.CustomerId = src.CustomerId;
      this.BrandId = src.BrandId;
      this.Price = src.Price;
      this.ExpiryDate = moment(src.ExpiryDate);
      this.IsDeleted = src.IsDeleted;
      this.Size = src.Size;
      this.UnitOfMeasureId = src.UnitOfMeasureId;
      this.ProductCategoryId = src.ProductCategoryId;
      this.SurveyDate = moment(src.SurveyDate);
      this.GroupId = src.GroupId;
      this.OutletId = src.OutletId;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }

      if (src.Brand) {
        this.Brand = new Brand(src.Brand);
      }

      if (src.Category) {
        this.Category = new ProductCategory(src.Category);
      }

      if (src.UnitOfMeasure) {
        this.UnitOfMeasure = new UnitOfMeasure(src.UnitOfMeasure);
      }

      if (src.CreatorUser) {
        this.CreatorUser = new UserAccount(src.CreatorUser);
      }

      if (src.Outlet) {
        this.Outlet = new Outlet(src.Outlet);
      }
    }
  }
}
