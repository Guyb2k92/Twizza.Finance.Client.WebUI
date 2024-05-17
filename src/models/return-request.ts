import { ValidationRules } from 'aurelia-validation';

export class ReturnsRequest {
  OrderId: number;
  NumberOfPallets: number = 0;
  NumberOfBoards: number = 0;
  NumberOfCases: number = 0;
  PickupSlipNumber: string;
  IsDeleted: boolean;

  constructor();
  constructor(src: ReturnsRequest);
  constructor(src?: ReturnsRequest) {
    if (src) {
      this.OrderId = src.OrderId;
      this.NumberOfPallets = src.NumberOfPallets;
      this.NumberOfBoards = src.NumberOfBoards;
      this.NumberOfCases = src.NumberOfCases;
      this.PickupSlipNumber = src.PickupSlipNumber;
      this.IsDeleted = src.IsDeleted;
    }
  }
}

//prettier-ignore
ValidationRules
  .ensure((rr: ReturnsRequest) => rr.NumberOfPallets).required()
  .ensure((rr: ReturnsRequest) => rr.NumberOfBoards).required()
  .ensure((rr: ReturnsRequest) => rr.NumberOfCases).required()
  .on(ReturnsRequest);
