import { computedFrom } from "aurelia-binding";

export class CustomerDimensionApprovalInfo {
  ProcessId: number;
  LockDate: Date;
  FirstName: string;
  LastName: string;
  LoginEmail: string;
  CustomerId: number;
  CustomerName: string;
  CustomerNumber: string;
  CompanyId: number;
  CompanyName: string;

  constructor();
  constructor(src: Partial<CustomerDimensionApprovalInfo>);
  constructor(src?: Partial<CustomerDimensionApprovalInfo>) {
    this.ProcessId = src.ProcessId;
    this.LockDate = src.LockDate;
    this.FirstName = src.FirstName;
    this.LastName = src.LastName;
    this.LoginEmail = src.LoginEmail;
    this.CustomerId = src.CustomerId;
    this.CustomerName = src.CustomerName;
    this.CustomerNumber = src.CustomerNumber;
    this.CompanyId = src.CompanyId;
    this.CompanyName = src.CompanyName;
  }

  @computedFrom('CompanyId', 'CustomerNumber')
  public get AccountNumberBadgeHTML(): string {
    return `<span class='account-badge ${this.CompanyId == 1 ? 'twizza' : 'crickley'}'>${
      this.CustomerNumber
    }</span>`;
  }

  @computedFrom('FirstName', 'LastName')
  public get DisplayName(): string {
    return `${this.FirstName} ${this.LastName}`;
  }
}
