import { Company } from "./company";
import { CustomerPriceSurvey } from "./customer-price-survey";
import { CustomerRangeVisibilitySurvey } from "./customer-range-visibility-survey";
import { PointOfSaleSurvey } from "./point-of-sale-survey";
import { UserAccount } from "@twizzadev/twizza-common-webui";
import { computedFrom } from "aurelia-framework";
import moment from "moment";

export class Outlet {
  Id: number;
  Name: string;
  CreatedDateTime: moment.Moment;
  UserId: number;
  CompanyId: number;
  IsDeleted: boolean;

  User: UserAccount;
  Company: Company;
  PointOfSaleSurveys: PointOfSaleSurvey[] = [];
  PriceSurveys: CustomerPriceSurvey[] = [];
  RangeVisibilitySurveys: CustomerRangeVisibilitySurvey[] = [];

  constructor();
  constructor(src: Outlet);
  constructor(src?: Outlet) {
    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.CreatedDateTime = src.CreatedDateTime
        ? moment(src.CreatedDateTime)
        : null;
      this.UserId = src.UserId;
      this.CompanyId = src.CompanyId;
      this.IsDeleted = src.IsDeleted;

      if (src.User) {
        this.User = new UserAccount(src.User);
      }
      if (src.Company) {
        this.Company = new Company(src.Company);
      }

      if (src.PointOfSaleSurveys && src.PointOfSaleSurveys.length > 0) {
        src.PointOfSaleSurveys.forEach((sur) =>
          this.PointOfSaleSurveys.push(new PointOfSaleSurvey(sur))
        );
      }

      if (src.PriceSurveys && src.PriceSurveys.length > 0) {
        src.PriceSurveys.forEach((sur) =>
          this.PriceSurveys.push(new CustomerPriceSurvey(sur))
        );
      }

      if (src.RangeVisibilitySurveys && src.RangeVisibilitySurveys.length > 0) {
        src.RangeVisibilitySurveys.forEach((sur) =>
          this.RangeVisibilitySurveys.push(
            new CustomerRangeVisibilitySurvey(sur)
          )
        );
      }
    }
  }

  @computedFrom("CompanyId")
  public get BadgeHTML(): string {
    return `<span class='account-badge ${
      this.CompanyId == 1 ? "twizza" : "crickley"
    }'>Outlet</span>`;
  }
}
