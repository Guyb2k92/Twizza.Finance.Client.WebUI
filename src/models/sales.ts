export class Sales {
  SalesID: number;
  BudgetPeriod: Date;
  Description: string;
  RegionPrefix: string;
  DisplayResponsibilityCentre: string;
  ResponsibilityCentre: string;
  Brand: string;
  Pack: string;
  ProductGroup: string;
  PackSize: string;
  Volume: number;
  TBD: string;
  CustomerRegion: string;
  SectionSales: string;
  SectionCost: string;
  SubSectionSales: string;
  SubSectionCost: string;
  SubAccSales: string;
  SubAccCost: string;
  ValueSales: number;
  ValueCost: number;

  constructor();
  constructor(src: Sales);
  constructor(src?: Sales) {
    if (src) {
      this.SalesID = src.SalesID;
      this.BudgetPeriod = src.BudgetPeriod;
      this.Description = src.Description;
      this.RegionPrefix = src.RegionPrefix;
      this.DisplayResponsibilityCentre = src.DisplayResponsibilityCentre;
      this.ResponsibilityCentre = src.ResponsibilityCentre;
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
  }
}
