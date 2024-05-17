export class VisitTask {
  Id: number;
  Name: string;
  Description: string;
  IsStatic: boolean;
  IsDeleted: boolean;

  constructor();
  constructor(src: VisitTask);
  constructor(src?: VisitTask) {
    if (src) {
      this.Id = src.Id;
      this.Name = src.Name;
      this.Description = src.Description;
      this.IsStatic = src.IsStatic;
      this.IsDeleted = src.IsDeleted;
    }
  }
}
