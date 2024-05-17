import { ApprovalRequest } from "@twizzadev/twizza-common-webui";
import { DealType } from "./deal";
import moment from "moment";

export class DealApprovalRequest extends ApprovalRequest {
  DealId: number;

  constructor();
  constructor(src: DealApprovalRequest);
  constructor(src?: DealApprovalRequest) {
    super(src);

    if (src) {
      var regInfo = JSON.parse(src.AdditionalRegInfo) as DealApprovalRequest;

      this.DealId = regInfo.DealId;
    } else {
      this.ApprovalType = "DealApproval";
    }
  }
}

export interface DealApprovalInfoRequest {
  ProcessId: number;
  DealId: number;
}

export class DealApprovalInfo implements DealApprovalInfoRequest {
  ProcessId: number;
  DealId: number;
  DealType: DealType;
  CustomerName: string;
  CustomerNumber: string;
  CustomerId?: number;
  CompanyId: number;
  CompanyName: string;
  RequestedBy: string;
  Created: moment.Moment;

  constructor();
  constructor(src: DealApprovalInfo);
  constructor(src?: DealApprovalInfo) {
    if (src) {
      this.ProcessId = src.ProcessId;
      this.DealId = src.DealId;
      this.DealType = src.DealType;
      this.CustomerName = src.CustomerName;
      this.CustomerNumber = src.CustomerNumber;
      this.CompanyId = src.CompanyId;
      this.CompanyName = src.CompanyName;
      this.RequestedBy = src.RequestedBy;
      this.Created = src.Created ? moment(src.Created) : null;
    }
  }
}
