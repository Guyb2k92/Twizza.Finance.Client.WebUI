import { ValidationRules } from 'aurelia-validation';

export class AccessToken {
  Id: number;
  Value: string;
  Version: number;
  AssetId: number;

  constructor();
  constructor(src: AccessToken);
  constructor(src?: AccessToken) {
    if (src) {
      this.Id = src.Id;
      this.Value = src.Value;
      this.Version = src.Version;
      this.AssetId = src.AssetId;
    } else {
      this.Id = 0;
    }
  }
}

ValidationRules
  .ensure((a: AccessToken) => a.Value).required().then().minLength(8).maxLength(256)
  .ensure((a: AccessToken) => a.Id).required().then().satisfies(id => (id >= 1))
  .ensure((a: AccessToken) => a.Version).required().then().satisfies(version => (version >= 1))
  .ensure((a: AccessToken) => a.AssetId).required().then().satisfies(id => (id >= 1))
  .on(AccessToken);
