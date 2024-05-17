﻿export class Company {
  Id: number;
  Name: string;
  SeparateCrateOrder: boolean;
  CrateAccountSuffix: string;
  
  constructor();
  constructor(src: Company);
  constructor(src?: Company) {
    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.SeparateCrateOrder = src.SeparateCrateOrder;
      this.CrateAccountSuffix = src.CrateAccountSuffix;
      //
      // if (src.SalesReps && src.SalesReps.length > 0) {
      //   src.SalesReps.forEach(rep => this.SalesReps.push(rep));
      // }
    }
  }
}
