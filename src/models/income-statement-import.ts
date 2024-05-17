import moment from "moment";

export type IncomeStatementType = "CCO" | "C-Suite" | "CEO" | "CDO" | "CMFO";
export type ResCentre = "QT" | "CT" | "MDB" | "Group";
export type Region =
  | "West"
  | "East"
  | "Central"
  | "North"
  | "Export"
  | "Housebrand"
  | "Group";

export class IncomeStatementImport {
  Id: number;
  Geographic: string;
  FinancialYear: number;
  Month: number;
  Report: string;
  Level1: string;
  Level2: string;
  Level3: string;
  Level4: string;
  Level5: string;
  Measure1: number;
  Measure2: number;
  Measure3: number;
  Measure4: number;
  Measure5: number;
  Measure6: number;
  Measure7: number;
  Measure8: number;
  Measure9: number;
  Measure10: number;
  ImportTime: moment.Moment;
  ImportedBy: string;
}
