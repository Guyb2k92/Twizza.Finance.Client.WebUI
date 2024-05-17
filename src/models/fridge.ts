import { Customer } from "./customer";
import { CustomerFridge } from "./customer-fridge";
import { ValidationRules } from "aurelia-validation";
import moment from "moment";

export class Fridge {
  Id: number;
  Code: string;
  Description: string;
  SerialNumber: string;
  AcquisitionDate: moment.Moment;
  IsActive: boolean;
  IsDeleted: boolean;
  CustomerFridges?: CustomerFridge[];
  Customer?: Customer;
  CurrentCustomer?: string;
  constructor();
  constructor(src: Fridge);
  constructor(src?: Fridge) {
    if (src) {
      this.Id = src.Id;
      this.Code = src.Code;
      this.Description = src.Description;
      this.SerialNumber = src.SerialNumber;
      this.AcquisitionDate = src.AcquisitionDate
        ? moment(src.AcquisitionDate)
        : null;
      this.IsActive = src.IsActive;
      this.IsDeleted = src.IsDeleted;
      this.CustomerFridges = src.CustomerFridges;
      this.Customer = src.Customer;
      this.CurrentCustomer = BindName(src.Customer);
    }
  }
}
function BindName(src: Customer): string {
  if (src) {
    if (src.Name) {
      return src.Name;
    }
  }
}
ValidationRules.ensure((f: Fridge) => f.Description)
  .required()
  .ensure((f: Fridge) => f.Code)
  .required()
  .ensure((f: Fridge) => f.SerialNumber)
  .required()
  .on(Fridge);
