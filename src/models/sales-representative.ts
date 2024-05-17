import { UserAccount } from '@twizzadev/twizza-common-webui';

export class SalesRepresentative {
  Id: number;
  CompanyId: number;
  UserId: number;
  SalesRepCode: string;

  User: UserAccount;

  constructor();
  constructor(src: SalesRepresentative);
  constructor(src?: SalesRepresentative) {
    if (src) {
      this.Id = src.Id;
      this.CompanyId = src.CompanyId;
      this.UserId = src.UserId;
      this.SalesRepCode = src.SalesRepCode;

      if (src.User) {
        this.User = new UserAccount(src.User);
      }
    }
  }
}
