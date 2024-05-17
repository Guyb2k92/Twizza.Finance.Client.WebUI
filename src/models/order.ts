import {
  CurrencyFormatValueConverter,
  UserAccount,
} from "@twizzadev/twizza-common-webui";

import { Company } from "./company";
import { Customer } from "./customer";
import { CustomerFinancials } from "./customer-financials";
import { CustomerProfile } from "./customer-profile";
import { Location } from "./location";
import { OrderLine } from "./order-line";
import { OrderLineCompulsory } from "./order-line-compulsory";
import { ResponsibilityCentre } from "./responsibility-centre";
import { ReturnsRequest } from "./return-request";
import { ValidationRules } from "aurelia-validation";
import moment from "moment";

export interface DeliveryAddress {
  DeliveryAddress_StreetNumber: string;
  DeliveryAddress_StreetAddress1: string;
  DeliveryAddress_StreetAddress2: string;
  DeliveryAddress_City: string;
  DeliveryAddress_Province: string;
  DeliveryAddress_PostalCode: string;
  DeliveryAddress_Country: string;
  DeliveryAddress_FormattedAddress: string;
  DeliveryAddress_Location: string;
  DeliveryAddress_Latitude: number;
  DeliveryAddress_Longitude: number;
}

export class Order {
  Id: number;
  CustomerId: number;
  CustomerAccountNumber: string;
  DeliveryDate: moment.Moment;
  NavPalletsAndBoardsOrderNumber: string;
  NetTotalExcl: number;
  VatTotal: number;
  GrossTotalIncl: number;
  CustomerReferenceNumber: string;
  NavOrderCreated: boolean;
  NavOrderDate?: moment.Moment;
  NavOrderNumber: string;
  ResponsibilityCentreId: number;
  Notes: string;
  IsDeleted: boolean;
  CompulsoryNetTotalExcl: number;
  CompulsoryVatTotal: number;
  CompulsoryGrossTotalIncl: number;
  LocationId: number;
  TailLiftRequired: boolean;
  TotalLayers: number;
  DeliveryAddress_StreetNumber: string;
  DeliveryAddress_StreetAddress1: string;
  DeliveryAddress_StreetAddress2: string;
  DeliveryAddress_City: string;
  DeliveryAddress_Province: string;
  DeliveryAddress_PostalCode: string;
  DeliveryAddress_Country: string;
  DeliveryAddress_FormattedAddress: string;
  DeliveryAddress_Location: string;
  DeliveryAddress_Latitude: number;
  DeliveryAddress_Longitude: number;
  CreatorUserId: number;
  DraftDate: moment.Moment;
  CompanyId: number;

  Customer: Customer;
  Lines: OrderLine[] = [];
  CompulsoryLines: OrderLineCompulsory[] = [];
  Returns: ReturnsRequest;
  ResponsibilityCentre: ResponsibilityCentre;
  Location: Location;
  Company: Company;
  CustomerProfile: CustomerProfile;
  Creator: UserAccount;

  constructor();
  constructor(src: Order);
  constructor(src?: Order) {
    if (src) {
      this.Id = src.Id;
      this.CustomerId = src.CustomerId;
      this.CustomerAccountNumber = src.CustomerAccountNumber;
      this.DeliveryDate = moment(src.DeliveryDate);
      this.NavPalletsAndBoardsOrderNumber = src.NavPalletsAndBoardsOrderNumber;
      this.NetTotalExcl = src.NetTotalExcl;
      this.VatTotal = src.VatTotal;
      this.GrossTotalIncl = src.GrossTotalIncl;
      this.CustomerReferenceNumber = src.CustomerReferenceNumber;
      this.NavOrderCreated = src.NavOrderCreated;
      this.NavOrderDate = src.NavOrderDate ? moment(src.NavOrderDate) : null;
      this.NavOrderNumber = src.NavOrderNumber;
      this.ResponsibilityCentreId = src.ResponsibilityCentreId;
      this.Notes = src.Notes;
      this.IsDeleted = src.IsDeleted;
      this.CompulsoryNetTotalExcl = src.CompulsoryNetTotalExcl;
      this.CompulsoryVatTotal = src.CompulsoryVatTotal;
      this.CompulsoryGrossTotalIncl = src.CompulsoryGrossTotalIncl;
      this.LocationId = src.LocationId;
      this.TailLiftRequired = src.TailLiftRequired;
      this.TotalLayers = src.TotalLayers;
      this.DeliveryAddress_StreetNumber = src.DeliveryAddress_StreetNumber;
      this.DeliveryAddress_StreetAddress1 = src.DeliveryAddress_StreetAddress1;
      this.DeliveryAddress_StreetAddress2 = src.DeliveryAddress_StreetAddress2;
      this.DeliveryAddress_City = src.DeliveryAddress_City;
      this.DeliveryAddress_Province = src.DeliveryAddress_Province;
      this.DeliveryAddress_PostalCode = src.DeliveryAddress_PostalCode;
      this.DeliveryAddress_Country = src.DeliveryAddress_Country;
      this.DeliveryAddress_FormattedAddress =
        src.DeliveryAddress_FormattedAddress;
      this.DeliveryAddress_Location = src.DeliveryAddress_Location;
      this.DeliveryAddress_Latitude = src.DeliveryAddress_Latitude;
      this.DeliveryAddress_Longitude = src.DeliveryAddress_Longitude;
      this.CreatorUserId = src.CreatorUserId;
      this.DraftDate = moment(src.DraftDate);
      this.CompanyId = src.CompanyId;

      if (src.Customer) {
        this.Customer = new Customer(src.Customer);
      }

      if (src.Lines && src.Lines.length > 0) {
        src.Lines.forEach((line) => this.Lines.push(new OrderLine(line)));
      }

      if (src.CompulsoryLines && src.CompulsoryLines.length > 0) {
        src.CompulsoryLines.forEach((col) =>
          this.CompulsoryLines.push(new OrderLineCompulsory(col))
        );
      }

      if (src.Returns) {
        this.Returns = new ReturnsRequest(src.Returns);
      }

      if (src.Location) {
        this.Location = new Location(src.Location);
      }

      if (src.ResponsibilityCentre) {
        this.ResponsibilityCentre = new ResponsibilityCentre(
          src.ResponsibilityCentre
        );
      }

      if (src.Company) {
        this.Company = new Company(src.Company);
      }

      if (src.CustomerProfile) {
        this.CustomerProfile = new CustomerProfile(src.CustomerProfile);
      }

      if (src.Creator) {
        this.Creator = new UserAccount(src.Creator);
      }
    }
  }

  static OrderValidationCalc1(
    financials: CustomerFinancials,
    orderTotal: number,
    currencyFormat: CurrencyFormatValueConverter
  ): [boolean, string] {
    const MAX_RAND_VAL = financials.Calc1MaxRandValue;
    const MAX_PERCENTAGE = financials.Calc1MaxPercentage;

    const creditLimit = financials.CreditLimit;
    if (creditLimit === 0) {
      return [true, null];
    }
    const maxPercentageRandValue = creditLimit * (MAX_PERCENTAGE / 100);
    const outStandingBalance = financials.TotalOverdueAmountsLCY;
    const currentOrdOutstandingBalance = outStandingBalance + orderTotal;
    const diffBalance = Math.abs(creditLimit - currentOrdOutstandingBalance);

    if (currentOrdOutstandingBalance > creditLimit) {
      let msg: string = `This order cannot be processed at this time as it will result in the customer exceeding their credit limit over and above an acceptable amount.
      <br/>
      <ul>
      <li>Customer credit limit: ${currencyFormat.toView(creditLimit)}</li>
      <li>Total Outstanding amount: ${currencyFormat.toView(outStandingBalance)}
      (obtained from Outstanding balance)</li>
      </ul>`;
      if (diffBalance > MAX_RAND_VAL || diffBalance > maxPercentageRandValue) {
        return [false, msg];
      }
    }
    return [true, null];
  }

  static OrderValidationCalc2(
    financials: CustomerFinancials,
    currencyFormat: CurrencyFormatValueConverter
  ): [boolean, string] {
    const MAX_RAND_VAL = financials.Calc2MaxRandValue;
    const MAX_PERCENTAGE = financials.Calc2MaxPercentage;
    const MAX_OVERDUE_CURRENT = financials.Calc2MaxDaysOverdue;

    const overdueExceededCurrent: number = financials.OverdueBalanceXdays;
    const totalOverdue: number = financials.OverdueCurrent;
    const totalOutstandingBalance = financials.TotalOverdueAmountsLCY;

    const overdueAsPerc =
      totalOverdue < 0 ? 0 : (100 * totalOverdue) / totalOutstandingBalance;
    let result = true;
    let message = "";

    if (overdueExceededCurrent > MAX_RAND_VAL) {
      result = false;
      message += `You cannot submit an order as the overdue amounts over a threshold number of days exceeds max rand value
         <br/>
         <ul>
        <li>Days outstanding: ${MAX_OVERDUE_CURRENT}</li>
        <li>Amount outstanding: ${currencyFormat.toView(totalOverdue)}</li>
        </ul>
        `;
    }

    if (overdueAsPerc > MAX_PERCENTAGE) {
      result = false;
      message += `You cannot submit an order as the customer’s overdue outstanding balance is too high when compared to total outstanding balance.
        <br/>
        <ul>
        <li>Percentage Allowed: ${MAX_PERCENTAGE}%</li>
        <li>Percentage of Outstanding balance against Total Outstanding: ${overdueAsPerc}%</li>
        </ul>
      `;
    }

    return [result, message];
  }

  static OrderValidationCalc3(
    financials: CustomerFinancials,
    currencyFormat: CurrencyFormatValueConverter
  ): [boolean, string] {
    const MAX_DAYS = financials.Calc3MaxDaysOverdue;

    if (financials.OverdueBalanceMaxdays > 0) {
      return [
        false,
        `You cannot submit an order as the customer has amounts outstanding that exceed the maximum days allowed.
        <br/>
        <ul>
        <li>Max outstanding days allowed: ${MAX_DAYS}</li>
        <li>Amount exceeding the max days allowed: ${currencyFormat.toView(
          financials.OverdueBalanceMaxdays
        )}</li>
        </ul>
        `,
      ];
    }

    return [true, null];
  }
}

//prettier-ignore
ValidationRules
  .ensure((o: Order) => o.CustomerId).required()
  .ensure((o: Order) => o.CustomerAccountNumber).required()
  .ensure((o: Order) => o.DeliveryDate).required()
  .ensure((o: Order) => o.DeliveryDate).required()
  .ensure((o: Order) => o.NetTotalExcl).required()
  .ensure((o: Order) => o.VatTotal).required()
  .ensure((o: Order) => o.GrossTotalIncl).required()
  .ensure((o: Order) => o.LocationId).required()
  .ensure((o: Order) => o.CompulsoryNetTotalExcl).required()
  .ensure((o: Order) => o.CompulsoryVatTotal).required()
  .ensure((o: Order) => o.CompulsoryGrossTotalIncl).required()
  .ensure((o: Order) => o.ResponsibilityCentreId).required()
  .on(Order);
