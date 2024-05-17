import moment from "moment";

export type DealCaptureRuleType =
  | "List"
  | "Cycle"
  | "Promo On"
  | "Promo Off"
  | "Default";

export class DealCaptureRule {
  Id: number;
  EffectiveFrom: moment.Moment;
  EffectiveTo: moment.Moment;
  Name: string;
  DealType: DealCaptureRuleType;
  Claim: string;
  Value: number;
  Unit: string;
  Priority: number;
  CompanyId: number;

  constructor();
  constructor(src: DealCaptureRule);
  constructor(src: DealCaptureRule);
  constructor(src?: DealCaptureRule) {
    if (src) {
      this.Id = src.Id;
      this.EffectiveFrom = moment(src.EffectiveFrom);
      this.EffectiveTo = moment(src.EffectiveTo);
      this.Name = src.Name;
      this.DealType = src.DealType;
      this.Claim = src.Claim;
      this.Value = src.Value;
      this.Unit = src.Unit;
      this.Priority = src.Priority;
      this.CompanyId = src.CompanyId;
    } else {
      this.Id = 0;
    }
  }
}
