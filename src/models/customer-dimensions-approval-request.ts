import { ApprovalRequest } from '@twizzadev/twizza-common-webui';
import { CustomerDimension } from './customer-dimension';

export class CustomerDimensionsApprovalRequest extends ApprovalRequest {
  UserId: number;
  CustomerId: number;
  Command: string;
  Message: string;
  Dimensions: CustomerDimension[];

  constructor();
  constructor(src: CustomerDimensionsApprovalRequest);
  constructor(src?: CustomerDimensionsApprovalRequest) {
    super(src);

    if (src) {
      var regInfo = JSON.parse(src.AdditionalRegInfo) as CustomerDimensionsApprovalRequest;

      this.UserId = regInfo.UserId;
      this.CustomerId = regInfo.CustomerId;
      this.Command = regInfo.Command;
      this.Dimensions = regInfo.Dimensions;
    } else {
      this.ApprovalType = 'CustomerDimensionApproval';
      this.Dimensions = new Array<CustomerDimension>();
    }
  }
}
