import { CustomerFridge } from "./customer-fridge";
import { UserAccount } from "@twizzadev/twizza-common-webui";
import { ValidationRules } from "aurelia-validation";
import moment from "moment";

export class CustomerFridgeConditionSurvey {
  Id: number;
  CustomerFridgeId: number;
  Clean: boolean;
  Lights: boolean;
  Doors: boolean;
  Branding: boolean;
  Cooling: boolean;
  TypeCooler: boolean;
  Stocked: boolean;
  Comment: string;
  SurveyDate: moment.Moment;
  IsDeleted: boolean;
  CreatorUserId: number;

  CustomerFridge: CustomerFridge;
  SurveyedBy: UserAccount;
  constructor();
  constructor(src: CustomerFridgeConditionSurvey);
  constructor(src?: CustomerFridgeConditionSurvey) {
    if (src) {
      this.Id = src.Id;
      this.CustomerFridgeId = src.CustomerFridgeId;
      this.Clean = src.Clean;
      this.Lights = src.Lights;
      this.Doors = src.Doors;
      this.Branding = src.Branding;
      this.Cooling = src.Cooling;
      this.TypeCooler = src.TypeCooler;
      this.Stocked = src.Stocked;
      this.Comment = src.Comment;
      this.SurveyDate = moment(src.SurveyDate);
      this.IsDeleted = src.IsDeleted;
      this.CreatorUserId = src.CreatorUserId;

      if (src.CustomerFridge) {
        this.CustomerFridge = new CustomerFridge(src.CustomerFridge);
      }

      if (src.SurveyedBy) {
        this.SurveyedBy = new UserAccount(src.SurveyedBy);
      }
    }
  }
}

//prettier-ignore
ValidationRules
  .ensure((s: CustomerFridgeConditionSurvey) => s.Comment).required()
  .on(CustomerFridgeConditionSurvey);
