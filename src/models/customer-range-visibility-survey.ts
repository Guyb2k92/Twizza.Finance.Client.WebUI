import { Brand } from './brand';
import { Customer } from './customer';
import { Outlet } from './outlet';
import { ProductCategory } from './product-category';
import { UnitOfMeasure } from './unit-of-measure';
import { UserAccount } from '@twizzadev/twizza-common-webui';
import moment from 'moment';

export class CustomerRangeVisibilitySurvey {
  Id: number;
  CustomerId: number;
  OutletId: number;
  BrandId: number;
  ProductCategoryId: number;
  UnitOfMeasureId: number;
  Size: number;
  Quantity: number;
  IsDeleted: boolean;
  SurveyDate: moment.Moment;
  CreatorUserId: number;
  GroupId: string;

  Customer: Customer;
  Brand: Brand;
  Category: ProductCategory;
  UnitOfMeasure: UnitOfMeasure;
  CreatorUser: UserAccount;
  Outlet: Outlet;

  constructor();
  constructor(src: CustomerRangeVisibilitySurvey);
  constructor(src?: CustomerRangeVisibilitySurvey) {
    if (src) {
      this.Id = src.Id;
      this.CustomerId = src.CustomerId;
      this.OutletId = src.OutletId;
      this.BrandId = src.BrandId;
      this.ProductCategoryId = src.ProductCategoryId;
      this.UnitOfMeasureId = src.UnitOfMeasureId;
      this.Size = src.Size;
      this.Quantity = src.Quantity;
      this.IsDeleted = src.IsDeleted;
      this.SurveyDate = moment(src.SurveyDate);
      this.CreatorUserId = src.CreatorUserId;
      this.GroupId = src.GroupId;

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
