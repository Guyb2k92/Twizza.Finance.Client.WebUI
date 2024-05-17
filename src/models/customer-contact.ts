﻿import { Customer } from './customer';
import { ValidationRules } from 'aurelia-validation';

export class CustomerContact {
  Id: number;
  FirstName: string;
  Surname: string;
  Title: string;
  JobTitle: string;
  PhoneNumber: string;
  MobileNumber: string;
  EmailAddress: string;
  Comments: string;
  IsPrimaryContact: boolean;
  CustomerId: number;
  IsDeleted: boolean;

  Customer: Customer;

  constructor();
  constructor(src: CustomerContact);
  constructor(src?: CustomerContact) {
    if (src) {
      this.Id = src.Id;
      this.FirstName = src.FirstName;
      this.Surname = src.Surname;
      this.Title = src.Title;
      this.JobTitle = src.JobTitle;
      this.PhoneNumber = src.PhoneNumber;
      this.MobileNumber = src.MobileNumber;
      this.EmailAddress = src.EmailAddress;
      this.Comments = src.Comments;
      this.IsPrimaryContact = src.IsPrimaryContact;
      this.CustomerId = src.CustomerId;
      this.IsDeleted = src.IsDeleted;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }
    }
  }
}

//prettier-ignore
ValidationRules
  .ensure((x: CustomerContact) => x.EmailAddress).email()
  .ensure((x: CustomerContact) => x.FirstName).required()
  .ensure((x: CustomerContact) => x.PhoneNumber).matches(new RegExp('^[+][0-9]{10,}$')).withMessage('Please supply the number in the specified format')
  .ensure((x: CustomerContact) => x.MobileNumber).matches(new RegExp('^[+][0-9]{10,}$')).withMessage('Please supply the number in the specified format')
  .on(CustomerContact);
