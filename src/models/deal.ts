import { Company } from "./company";
import { Customer } from "./customer";
import { DealLine } from "./deal-line";
import { UserAccount } from "@twizzadev/twizza-common-webui";
import moment from "moment";

export type DealType = "Default" | "List" | "Cycle" | "Promo";

export class Deal {
  Id: number;
  CreatorUserId: number;
  CreatedTime: moment.Moment;
  SubmittedTime?: moment.Moment;
  ValidFrom: moment.Moment;
  ValidTo: moment.Moment;
  CustomerId?: number;
  CompanyId: number;
  ChainCode?: string;
  AuthorisedTime?: moment.Moment;
  AuthorisedUserId?: number;
  RejectedTime?: moment.Moment;
  RejectedUserId?: number;
  Status: string;
  DaysToActivation: number;
  CanApprove: boolean = false;
  DealType: DealType;

  CreatorUser: UserAccount;
  AuthorisedUser: UserAccount;
  RejectedUser: UserAccount;
  Customer: Customer;
  Company: Company;
  DealLines: DealLine[];

  ChannelCode?: string;
  HoldingCompCode?: string;
  GroupCode?: string;
  BannerCode?: string;
  CustomerTypeCode?: string;
  SalesRegionCode?: string;
  OnPromo?: boolean;

  BillToAccountNo?: string;

  constructor();
  constructor(src: Deal);
  constructor(src?: Deal) {
    this.DealLines = [];

    if (src) {
      this.Id = src.Id;
      this.DealType = this.dealTypeConversion(src.DealType);
      this.CreatorUserId = src.CreatorUserId;
      this.CreatedTime = src.CreatedTime ? moment(src.CreatedTime) : null;
      this.SubmittedTime = src.SubmittedTime ? moment(src.SubmittedTime) : null;
      this.ValidFrom = moment(src.ValidFrom);
      this.ValidTo = moment(src.ValidTo);
      this.CustomerId = src.CustomerId;
      this.CompanyId = src.CompanyId;
      this.ChainCode = src.ChainCode;
      this.AuthorisedTime = src.AuthorisedTime
        ? moment(src.AuthorisedTime)
        : null;
      this.AuthorisedUserId = src.AuthorisedUserId;
      this.RejectedTime = src.RejectedTime ? moment(src.RejectedTime) : null;
      this.RejectedUserId = src.RejectedUserId;
      this.Status = src.Status;
      this.DaysToActivation = src.DaysToActivation;
      this.CanApprove = src.CanApprove;

      this.ChannelCode = src.ChannelCode;
      this.HoldingCompCode = src.HoldingCompCode;
      this.GroupCode = src.GroupCode;
      this.BannerCode = src.BannerCode;
      this.CustomerTypeCode = src.CustomerTypeCode;
      this.SalesRegionCode = src.SalesRegionCode;

      this.OnPromo = src.OnPromo;

      this.BillToAccountNo = src.BillToAccountNo;

      if (src.CreatorUser) {
        this.CreatorUser = new UserAccount(src.CreatorUser);
      }
      if (src.AuthorisedUser) {
        this.AuthorisedUser = new UserAccount(src.AuthorisedUser);
      }
      if (src.RejectedUser) {
        this.RejectedUser = new UserAccount(src.RejectedUser);
      }
      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }
      if (src.Company) {
        this.Company = new Company(src.Company);
      }

      if (src.DealLines) {
        src.DealLines.forEach((line) => {
          this.DealLines.push(new DealLine(line));
        });
      }
    } else {
      this.Id = 0;
      this.Status = "Draft";
    }
  }

  private dealTypeConversion(apiType: string | DealType): DealType {
    switch (apiType) {
      case "Promo":
      case "promo":
        return "Promo";
      case "List":
      case "list":
        return "List";
      case "Cycle":
      case "cycle":
        return "Cycle";
      default:
        return "Default";
    }
  }

  public get ActionUser(): string {
    if (this.RejectedTime) {
      return this.RejectedUser ? this.RejectedUser.DisplayName : "<UNKNOWN>";
    }
    if (this.AuthorisedTime) {
      return this.AuthorisedUser
        ? this.AuthorisedUser.DisplayName
        : "<UNKNOWN>";
    }

    return null;
  }

  public get ActionTime(): moment.Moment {
    return this.RejectedTime || this.AuthorisedTime;
  }

  public get PromoDealType(): string {
    if (this.DealType !== "Promo") {
      return null;
    }

    return !!this.OnPromo ? "OnPromo" : "OffPromo";
  }

  public get DealTypeDetailed(): string {
    switch (this.DealType) {
      case "Promo":
        return `${this.OnPromo ? "On-Promo" : "Off-Promo"} (${
          this.BillToAccountNo ? "Bill To" : "Customer"
        })`;
      default:
        return this.DealType;
    }
  }
}
