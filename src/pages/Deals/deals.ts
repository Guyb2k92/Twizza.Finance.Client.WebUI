import { NavDimension, NavDimensionCode } from "../../models/nav-dimensions";

import { Datatable } from "mdb-ui-kit";
import { Deal } from "../../models/deal";
import DealsService from "../../services/deals-service";
import { inject } from "aurelia";

/* eslint-disable @typescript-eslint/no-unused-vars */

@inject(DealsService)
export class Deals {
  constructor(private dealsService: DealsService) {}
  dataTable;
  customerDimensions: NavDimension[] = [];
  async attached() {
    this.dataTable = new Datatable(
      document.getElementById("datatable"),
      this.basicData
    );
    await this.getCycleDeals();
  }

  async getDimensions() {
    const response = await this.dealsService.getAllDimensons(1);
    this.customerDimensions = response;
  }
  async getCycleDeals() {
    const response = await this.dealsService.getDeals();
    await this.getDimensions();

    response.forEach((element: Deal) => {
      const data = [
        element.Status,
        element.ValidFrom,
        element.ValidTo,
        this.findDim("CHANNEL", element.ChannelCode),
        element.ChannelCode,
        element.SalesRegionCode,
        element.HoldingCompCode,
        element.GroupCode,
        element.BannerCode,
        element.CustomerTypeCode,
        element.CreatorUser?.FirstName,
        element.AuthorisedUser?.FirstName,
        element.AuthorisedTime,
      ];
      this.basicData.rows.push(data);
      this.dataTable.update({ loading: false });
    });
  }

  findDim(dimType: NavDimensionCode, dimCode: string): string {
    const dim = this.customerDimensions.find((dim) => {
      dim.DimensionCode === dimType && dim.DimensionValueCode === dimCode;
    });

    if (dim) {
      return dim.DisplayValue;
    }
  }
  basicData = {
    columns: [
      "Status",
      "From",
      "To",
      "Channel",
      "Region",
      "Holding Co",
      "Group",
      "Banner",
      "Customer Type",
      "Created By",
      "Authorised By",
      "Authorised Date",
    ],
    rows: [],
  };
}
