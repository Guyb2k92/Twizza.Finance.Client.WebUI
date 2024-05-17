export class Budget {
  SalesID?: number;
  WarehouseID?: number;
  CamsGroupID?: number;
  ActivationsID?: number;

  Id: number;
  Value?: number;
  BudgetPeriod: string;
  CostType?: string;
  Department?: string;
  SubAccountCategory?: string;
  Section?: string;
  SubSection?: string;
  Description?: string;
  ResponsibilityCentre?: string;
  RegionPrefix?: string;
  DisplayResponsibilityCentre?: string;
  Brand?: string;
  Pack?: string;
  ProductGroup?: string;
  PackSize?: string;
  Volume?: number;
  TBD?: string;
  CustomerRegion?: string;
  SectionSales?: string;
  SectionCost?: string;
  SubSectionSales?: string;
  SubSectionCost?: string;
  SubAccSales?: string;
  SubAccCost?: string;
  ValueSales?: number;
  ValueCost?: number;

  constructor();
  constructor(src: Budget);
  constructor(src?: Budget) {
    if (src) {
      this.Value = src.Value;
      this.BudgetPeriod = src.BudgetPeriod;
      this.CostType = src.CostType;
      this.Department = src.Department;
      this.SubAccountCategory = src.SubAccountCategory;
      this.Section = src.Section;
      this.SubSection = src.SubSection;
      this.Description = src.Description;
      this.ResponsibilityCentre = src.ResponsibilityCentre;
      this.RegionPrefix = src.RegionPrefix;
      this.DisplayResponsibilityCentre = src.DisplayResponsibilityCentre;
      this.Brand = src.Brand;
      this.Pack = src.Pack;
      this.ProductGroup = src.ProductGroup;
      this.PackSize = src.PackSize;
      this.Volume = src.Volume;
      this.TBD = src.TBD;
      this.CustomerRegion = src.CustomerRegion;
      this.SectionSales = src.SectionSales;
      this.SectionCost = src.SectionCost;
      this.SubSectionSales = src.SubSectionSales;
      this.SubSectionCost = src.SubSectionCost;
      this.SubAccSales = src.SubAccSales;
      this.SubAccCost = src.SubAccCost;
      this.ValueSales = src.ValueSales;
      this.ValueCost = src.ValueCost;
    }

    if (src.SalesID) {
      this.Id = src.SalesID;
    }
    if (src.WarehouseID) {
      this.Id = src.WarehouseID;
    }
    if (this.CamsGroupID) {
      this.Id = src.CamsGroupID;
    }
  }
}
