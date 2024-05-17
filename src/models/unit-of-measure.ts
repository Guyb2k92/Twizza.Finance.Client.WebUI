export class UnitOfMeasure {
  Id: number;
  Abbreviation: string;
  DisplayName: string;

  constructor();
  constructor(src: UnitOfMeasure);
  constructor(src?: UnitOfMeasure) {
    if (src) {
      this.Id = src.Id;
      this.Abbreviation = src.Abbreviation;
      this.DisplayName = src.DisplayName;
    } else {
      this.Id = 0;
    }
  }
}
