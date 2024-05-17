import { CustomerDimension } from './customer-dimension';
export class DimensionRequest {
  Dimension: CustomerDimension;
  Code?: string;
  constructor(code: string, dimension: CustomerDimension) {
    this.Code = code;
    this.Dimension = dimension;
  }
}
