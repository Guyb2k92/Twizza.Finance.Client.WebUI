﻿import { Customer } from "./customer";
import { CustomerVisitTask } from "./customer-visit-task";
import moment from "moment";

export class CustomerVisit {
  Id: number;
  CustomerId: number;
  VisitorUserId: number;
  CheckInLatitude: number;
  CheckInLongitude: number;
  CheckInTime: moment.Moment;
  PriceSurveyTime: moment.Moment;
  FridgeConditionSurveyTime: moment.Moment;
  PointOfSaleSurveyTime: moment.Moment;
  AvailabilitySurveyTime: moment.Moment;
  RangeVisibilitySurveyTime: moment.Moment;
  CheckOutTime: moment.Moment;
  CheckOutLatitude: number;
  CheckOutLongitude: number;
  CheckInValid: boolean;
  CheckOutValid: boolean;

  Customer: Customer;
  Tasks: CustomerVisitTask[] = [];

  constructor();
  constructor(src: CustomerVisit);
  constructor(src?: CustomerVisit) {
    if (src) {
      this.Id = src.Id;
      this.CustomerId = src.CustomerId;
      this.VisitorUserId = src.VisitorUserId;
      this.CheckInLatitude = src.CheckInLatitude;
      this.CheckInLongitude = src.CheckInLongitude;
      this.CheckInTime = src.CheckInTime ? moment(src.CheckInTime) : null;
      this.PriceSurveyTime = src.PriceSurveyTime;
      this.FridgeConditionSurveyTime = src.FridgeConditionSurveyTime;
      this.PointOfSaleSurveyTime = src.PointOfSaleSurveyTime;
      this.AvailabilitySurveyTime = src.AvailabilitySurveyTime;
      this.RangeVisibilitySurveyTime = src.RangeVisibilitySurveyTime;
      this.CheckOutTime = src.CheckOutTime ? moment(src.CheckOutTime) : null;
      this.CheckOutLatitude = src.CheckOutLatitude;
      this.CheckOutLongitude = src.CheckOutLongitude;
      this.CheckInValid = src.CheckInValid;
      this.CheckOutValid = src.CheckOutValid;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }

      if (src.Tasks && src.Tasks.length > 0) {
        src.Tasks.forEach((t) => this.Tasks.push(new CustomerVisitTask(t)));
      }
    }
  }
}
