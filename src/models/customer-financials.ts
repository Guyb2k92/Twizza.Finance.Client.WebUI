﻿import { computedFrom } from "aurelia-binding";
import moment from "moment";

export class CustomerFinancials {
  Company: string;
  CompanyId: number;
  CustomerAcc: string;
  CreditLimit: number;
  OverdueBalance0to30days: number;
  OverdueBalance31to60days: number;
  OverdueBalance61to90days: number;
  OverdueBalanceOver90days: number;
  OverdueBalance91to120days: number;
  OverdueBalanceOver120days: number;
  OverdueBalanceXdays: number;
  TotalOverdueAmountsLCY: number;
  OverdueBalanceMaxdays: number;
  OverdueCurrent: number;
  LastRecieptDate: moment.Moment;

  Calc1MaxRandValue: number;
  Calc1MaxPercentage: number;
  Calc1Enabled: boolean;
  Calc2MaxRandValue: number;
  Calc2MaxPercentage: number;
  Calc2MaxDaysOverdue: number;
  Calc2Enabled: boolean;
  Calc3MaxDaysOverdue: number;
  Calc3Enabled: boolean;
  PaymentTermsCode: string;
  OutstandingOrders: number;

  constructor(src: CustomerFinancials) {
    if (src) {
      this.Company = src.Company;
      this.CompanyId = src.CompanyId;
      this.CustomerAcc = src.CustomerAcc;
      this.CreditLimit = src.CreditLimit;
      this.OverdueBalance0to30days = src.OverdueBalance0to30days;
      this.OverdueBalance31to60days = src.OverdueBalance31to60days;
      this.OverdueBalance61to90days = src.OverdueBalance61to90days;
      this.OverdueBalanceOver90days = src.OverdueBalanceOver90days;
      this.OverdueBalance91to120days = src.OverdueBalance91to120days;
      this.OverdueBalanceOver120days = src.OverdueBalanceOver120days;
      this.OverdueBalanceXdays = src.OverdueBalanceXdays;
      this.TotalOverdueAmountsLCY = src.TotalOverdueAmountsLCY;
      this.OverdueBalanceMaxdays = src.OverdueBalanceMaxdays;
      this.OverdueCurrent = src.OverdueCurrent;
      this.LastRecieptDate = src.LastRecieptDate
        ? moment(src.LastRecieptDate)
        : null;
      this.Calc1MaxRandValue = src.Calc1MaxRandValue;
      this.Calc1MaxPercentage = src.Calc1MaxPercentage;
      this.Calc1Enabled = src.Calc1Enabled;
      this.Calc2MaxRandValue = src.Calc2MaxRandValue;
      this.Calc2MaxPercentage = src.Calc2MaxPercentage;
      this.Calc2MaxDaysOverdue = src.Calc2MaxDaysOverdue;
      this.Calc2Enabled = src.Calc2Enabled;
      this.Calc3MaxDaysOverdue = src.Calc3MaxDaysOverdue;
      this.Calc3Enabled = src.Calc3Enabled;
      this.PaymentTermsCode = src.PaymentTermsCode;
      this.OutstandingOrders = src.OutstandingOrders;
    }
  }

  @computedFrom("CreditLimit", "TotalOverdueAmountsLCY")
  get CreditBalance(): number {
    if (this.CreditLimit && this.TotalOverdueAmountsLCY) {
      return this.CreditLimit - this.TotalOverdueAmountsLCY;
    }

    return this.CreditLimit;
  }

  @computedFrom("CreditLimit", "TotalOverdueAmountsLCY")
  get CreditBalancePercentage(): number {
    if (
      this.CreditLimit &&
      this.CreditBalance &&
      this.CreditBalance > 0 &&
      this.CreditLimit > 0
    ) {
      return Math.min(
        Math.round((this.CreditBalance / this.CreditLimit) * 1000.0) / 10.0,
        100
      );
    }

    return 0;
  }

  @computedFrom("TotalOverdueAmountsLCY", "OverdueCurrent")
  get AmountNotDue(): number {
    if (this.OverdueCurrent && this.TotalOverdueAmountsLCY) {
      return this.TotalOverdueAmountsLCY - this.OverdueCurrent;
    }

    return this.TotalOverdueAmountsLCY;
  }
}
