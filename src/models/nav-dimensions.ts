export type NavDimensionCode = 'CUST_HOLD_COMP' | 'CUSTGROUP' | 'CUSTOMER_BANNER' |
  'CHANNEL' | 'CUSTOMER_SUB_CHANNEL' | 'CUSTOMER_ACC_TYPE' | 'CUSTOMER_CHAN_TYPE' |
  'CUSTOMER_TYPE' | 'KEY_ACC_IND' | 'SALES_DIVISION' | 'SALES_REGION';

export class NavDimension {
  DimensionCode: NavDimensionCode;
  DimensionValueCode: string;
  DisplayValue: string;
  ParentValueCode: string;
  CompanyId: number;

  constructor();
  constructor(src: Partial<NavDimension>);
  constructor(src?: Partial<NavDimension>) {
    if (src) {
      this.DimensionCode = src.DimensionCode;
      this.DimensionValueCode = src.DimensionValueCode;
      this.DisplayValue = src.DisplayValue;
      this.CompanyId = src.CompanyId;
      this.ParentValueCode = src.ParentValueCode;
    }
  }

  public static CodeDescription(code: NavDimensionCode): string {
    switch (code) {
      case 'CUST_HOLD_COMP':
        return 'Holding Company';
      case 'CUSTGROUP':
        return 'Group';
      case 'CUSTOMER_BANNER':
        return 'Banner';
      case 'CHANNEL':
        return 'Channel';
      case 'CUSTOMER_SUB_CHANNEL':
        return 'Sub Channel';
      case 'CUSTOMER_ACC_TYPE':
        return 'Account Type';
      case 'CUSTOMER_CHAN_TYPE':
        return 'Channel Type';
      case 'CUSTOMER_TYPE':
        return 'Customer Type';
      case 'KEY_ACC_IND':
        return 'Key Account Indicator';
      case 'SALES_DIVISION':
        return 'Sales Division';
      case 'SALES_REGION':
        return 'Sales Region';
      default:
        return 'UNKNOWN';
    }
  }
}
