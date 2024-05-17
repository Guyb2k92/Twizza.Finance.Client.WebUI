export type POSTResultStatus = 'DEFER' | 'SUCCESS';
export class POSTResult<TResultType> {
  Status: POSTResultStatus;
  Result: TResultType;

  constructor(status: POSTResultStatus, result: TResultType) {
    this.Status = status;
    this.Result = result;
  }
}
