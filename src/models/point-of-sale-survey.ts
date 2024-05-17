import { Customer } from "./customer";
import { Outlet } from "./outlet";
import { UserAccount } from "@twizzadev/twizza-common-webui";
import { ValidationRules } from "aurelia-validation";
import moment from "moment";

export class PointOfSaleSurvey {
  Id: number;
  CustomerId: number;
  WashlineBanners: boolean;
  PackedDisplay: boolean;
  PalletWrap: boolean;
  StockPresentable: boolean;
  PricingBoards: boolean;
  TypeOfDisplay: boolean;
  PriceVisibility: boolean;
  SurveyDate: moment.Moment;
  Comment: string;
  OutletId: number;

  Customer: Customer;
  CreatorUser: UserAccount;
  Outlet: Outlet;

  constructor();
  constructor(src: PointOfSaleSurvey);
  constructor(src?: PointOfSaleSurvey) {
    if (src) {
      this.Id = src.Id;
      this.CustomerId = src.CustomerId;
      this.WashlineBanners = src.WashlineBanners;
      this.PackedDisplay = src.PackedDisplay;
      this.PalletWrap = src.PalletWrap;
      this.StockPresentable = src.StockPresentable;
      this.PricingBoards = src.PricingBoards;
      this.TypeOfDisplay = src.TypeOfDisplay;
      this.PriceVisibility = src.PriceVisibility;
      this.SurveyDate = moment(src.SurveyDate);
      this.Comment = src.Comment;
      this.OutletId = src.OutletId;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
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

// prettier-ignore
ValidationRules
  .ensure((pos: PointOfSaleSurvey) => pos.Comment).required()
  .on(PointOfSaleSurvey);
