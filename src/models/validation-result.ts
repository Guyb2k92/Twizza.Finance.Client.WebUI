export class ValidationResult {
  Message: string;
  Block: boolean;

  constructor();
  constructor(src: ValidationResult);
  constructor(src?: ValidationResult) {
    if (src) {
      this.Message = src.Message;
      this.Block = src.Block;
    }
  }
}
