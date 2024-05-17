import { ValidationRules } from 'aurelia-validation';

export class DocManAsset {
  Id: number;
  Name: string;
  EntityType: string;
  EntityId?: number;
  OriginalName: string;
  MimeType: string;
  DataBinary: string;
  Process: string;
  DocumentType: string;
  DocumentTypeId: number;
  Tags: string[];

  constructor();
  constructor(src: DocManAsset);
  constructor(src?: DocManAsset) {
    this.Tags = [];

    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.EntityType = src.EntityType;
      this.EntityId = src.EntityId;
      this.OriginalName = src.OriginalName;
      this.MimeType = src.MimeType;
      this.DataBinary = src.DataBinary;
      this.Process = src.Process;
      this.DocumentType = src.DocumentType;

      if (src.Tags) {
        src.Tags.forEach((tag) => {
          this.Tags.push(tag);
        });
      }
    } else {
      this.Id = 0;
    }
  }

  public openNewWindow() {
    let base64 = 'data:' + this.MimeType + ';base64,' + this.DataBinary;
    fetch(base64)
      .then((res) => res.blob())
      .then((blob) => {
        window.open(URL.createObjectURL(blob), '_blank');
      });
  }
}

//prettier-ignore
ValidationRules
    .ensure((a: DocManAsset) => a.Name).required().then().minLength(1).maxLength(256)
    .ensure((a: DocManAsset) => a.EntityId).satisfies(id => id == null || id >= 0)
    .ensure((a: DocManAsset) => a.OriginalName).maxLength(256)
    .ensure((a: DocManAsset) => a.MimeType).required().then().minLength(1).maxLength(256)
    .ensure((a: DocManAsset) => a.DataBinary).required().then().minLength(1)
    .ensure((a: DocManAsset) => a.Process).required().then().minLength(1).maxLength(256)
    .on(DocManAsset);
