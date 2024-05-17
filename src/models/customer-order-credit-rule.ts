﻿import { ValidationRules } from 'aurelia-validation';
import { CustomerProfile } from './customer-profile';
import { Customer } from './customer';
import { Company } from './company';

export class CustomerOrderCreditRule {
  CustomerId: number;
  CompanyId: number;
  Calc1MaxRandValue: number = 0;
  Calc1MaxPercentage: number = 0;
  Calc1Enabled: boolean;
  Calc1Override: boolean;
  Calc2MaxRandValue: number = 0;
  Calc2MaxPercentage: number = 0;
  Calc2MaxDaysOverdue: number = 0;
  Calc2Enabled: boolean;
  Calc2Override: boolean;
  Calc3MaxDaysOverdue: number = 0;
  Calc3Override: boolean;
  Calc3Enabled: boolean;

  CustomerProfile: CustomerProfile;
  Customer: Customer;
  Company: Company;

  constructor();
  constructor(src: CustomerOrderCreditRule);
  constructor(src?: CustomerOrderCreditRule) {
    if (src) {
      this.CustomerId = src.CustomerId;
      this.CompanyId = src.CompanyId;
      this.Calc1MaxRandValue = src.Calc1MaxRandValue;
      this.Calc1MaxPercentage = src.Calc1MaxPercentage;
      this.Calc1Enabled = src.Calc1Enabled;
      this.Calc1Override = src.Calc1Override;
      this.Calc2MaxRandValue = src.Calc2MaxRandValue;
      this.Calc2MaxPercentage = src.Calc2MaxPercentage;
      this.Calc2MaxDaysOverdue = src.Calc2MaxDaysOverdue;
      this.Calc2Enabled = src.Calc2Enabled;
      this.Calc2Override = src.Calc2Override;
      this.Calc3MaxDaysOverdue = src.Calc3MaxDaysOverdue;
      this.Calc3Override = src.Calc3Override;
      this.Calc3Enabled = src.Calc3Enabled;

      if (src.CustomerProfile) {
        this.CustomerProfile = new CustomerProfile(src.CustomerProfile);
      }

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }

      if (src.Company) {
        this.Company = new Company(src.Company);
      }
    }
  }
}

ValidationRules
  .ensure((c: CustomerOrderCreditRule) => c.Calc1MaxRandValue).min(0).required()
  .ensure((c: CustomerOrderCreditRule) => c.Calc1MaxPercentage).min(0).max(100).required()
  .ensure((c: CustomerOrderCreditRule) => c.Calc2MaxRandValue).required()
  .ensure((c: CustomerOrderCreditRule) => c.Calc2MaxPercentage).min(0).max(100).required()
  .ensure((c: CustomerOrderCreditRule) => c.Calc2MaxDaysOverdue).min(0).required()
  .ensure((c: CustomerOrderCreditRule) => c.Calc3MaxDaysOverdue).min(0).required()
  .on(CustomerOrderCreditRule);
