import { CustomerOrderCreditRule } from './customer-order-credit-rule';

﻿import { computedFrom } from 'aurelia-binding';
import { Customer } from './customer';
import { Company } from './company';
import { ResponsibilityCentre } from './responsibility-centre';
import { CustomerFinancials } from './customer-financials';
import { SalesRepresentative } from './sales-representative';
import { Location } from './location';

export class CustomerProfile {
  CustomerId: number;
  CompanyId: number;
  SellToAccountNumber: string;
  BillToAccountNumber: string;
  ChepAccountNumber: string;
  ChainCode: string;
  ChainDescription: string;
  SalesRepId: number;
  DefaultResponsibilityCentreId: number;
  DefaultLocationId: number;
  Blocked: boolean;

  Customer: Customer;
  Company: Company;
  ResponsibilityCentre: ResponsibilityCentre;
  DefaultLocation: Location;
  Financials: CustomerFinancials;
  CreditRules: CustomerOrderCreditRule;
  SalesRep: SalesRepresentative;

  constructor();
  constructor(src: CustomerProfile);
  constructor(src?: CustomerProfile) {
    if (src) {
      this.CustomerId = src.CustomerId;
      this.CompanyId = src.CompanyId;
      this.SellToAccountNumber = src.SellToAccountNumber;
      this.BillToAccountNumber = src.BillToAccountNumber;
      this.ChepAccountNumber = src.ChepAccountNumber;
      this.ChainCode = src.ChainCode;
      this.ChainDescription = src.ChainDescription;
      this.SalesRepId = src.SalesRepId;
      this.DefaultResponsibilityCentreId = src.DefaultResponsibilityCentreId;
      this.DefaultLocationId = src.DefaultLocationId;
      this.Blocked = src.Blocked;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }

      if (src.Company) {
        this.Company = new Company(src.Company);
      }

      if (src.ResponsibilityCentre) {
        this.ResponsibilityCentre = new ResponsibilityCentre(src.ResponsibilityCentre);
      }

      if (src.DefaultLocation) {
        this.DefaultLocation = new Location(src.DefaultLocation);
      }

      if (src.Financials) {
        this.Financials = new CustomerFinancials(src.Financials);
      }

      if (src.CreditRules) {
        this.CreditRules = new CustomerOrderCreditRule(src.CreditRules);
      }

      if (src.SalesRep) {
        this.SalesRep = new SalesRepresentative(src.SalesRep);
      }
    }
  }

  @computedFrom('CompanyId', 'SellToAccountNumber')
  public get AccountNumberBadgeHTML(): string {
    return `<span class='account-badge ${this.CompanyId == 1 ? 'twizza' : 'crickley'}'>${
      this.SellToAccountNumber
    }</span>`;
  }

  @computedFrom('CompanyId', 'BillToAccountNumber')
  public get BillToAccountNumberBadgeHTML(): string {
    return `<span class='account-badge ${this.CompanyId == 1 ? 'twizza' : 'crickley'}'>${
      this.BillToAccountNumber
    }</span>`;
  }

  @computedFrom('CompanyId', 'SalesRep.SalesRepCode')
  public get RepCodeBadgeHTML(): string {
    return `<div class="mb-1"><span style="min-width: " class='salesrep-badge mr-2 ${this.CompanyId == 1 ? 'twizza' : 'crickley'}'>${
      this.SalesRep.SalesRepCode
    }</span>${this.SalesRep.User.DisplayName}</div>`;
  }
}
