import { Customer } from './customer';
import { CustomerFridgeConditionSurvey } from './customer-fridge-condition-survey';
import { Fridge } from './fridge';
import { UserAccount } from '@twizzadev/twizza-common-webui';
import moment from 'moment';

export class CustomerFridge {
  Id: number;
  CustomerId: number;
  FridgeId: number;
  DateOfIssue: moment.Moment;
  IssuedByUserId: number;
  ReturnedDateTime: moment.Moment;
  ReturnedByUserId: number;
  IsDeleted: boolean;

  Customer: Customer;
  Fridge: Fridge;
  Surveys: CustomerFridgeConditionSurvey[] = [];
  IssuedBy: UserAccount;
  ReturnedBy: UserAccount;

  constructor();
  constructor(src: CustomerFridge);
  constructor(src?: CustomerFridge) {
    if (src) {
      this.Id = src.Id;
      this.CustomerId = src.CustomerId;
      this.FridgeId = src.FridgeId;
      this.DateOfIssue = src.DateOfIssue;
      this.IssuedByUserId = src.IssuedByUserId;
      this.ReturnedDateTime = src.ReturnedDateTime;
      this.ReturnedByUserId = src.ReturnedByUserId;
      this.IsDeleted = src.IsDeleted;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }

      if (src.Fridge) {
        this.Fridge = new Fridge(src.Fridge);
      }

      if (src.Surveys && src.Surveys.length > 0) {
        src.Surveys.forEach((sur) => this.Surveys.push(new CustomerFridgeConditionSurvey(sur)));
      }

      if (src.IssuedBy) {
        this.IssuedBy = new UserAccount(src.IssuedBy);
      }

      if (src.ReturnedBy) {
        this.ReturnedBy = new UserAccount(src.ReturnedBy);
      }
    }
  }
}
