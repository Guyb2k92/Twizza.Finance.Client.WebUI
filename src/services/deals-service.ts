import { Deal, DealType } from "../models/deal";

import { AuthHttpClient } from "./auth-http-client";
import { inject } from "aurelia";

@inject(AuthHttpClient)
export class DealsService {
  constructor(public authHttpClient: AuthHttpClient) {}

  async getDeals(
    chainDeals?: boolean,
    dealType?: DealType,
    status?: string,
    customerId?: number,
    companyId?: number,
    page?: number,
    limit?: number,
    filter?: string
  ) {
    this.authHttpClient.baseUrl =
      "https://dev.clarkservices.co.za/Twizza.Sales.WebApi/v1/deal/searchdeals";
    let URL;
    URL = `/v1/deal/searchdeals/${chainDeals}`;

    const params = new Array<string>();
    if (page !== undefined) {
      params.push(`page=${page + 1}`);
    }
    if (limit !== undefined) {
      params.push(`pageSize=${limit}`);
    }
    if (filter && filter.length > 0) {
      params.push(`filter=${filter}`);
    }
    if (status && status.length > 0) {
      params.push(`status=${status}`);
    }
    if (customerId) {
      params.push(`customerId=${customerId}`);
    }
    if (companyId) {
      params.push(`companyId=${companyId}`);
    }
    if (dealType) {
      params.push(`dealType=${dealType}`);
    }
    if (params.length) {
      URL += `?${params.join("&")}`;
    }

    const response = await this.authHttpClient.fetch(
      "/false?page=1&pageSize=10&companyId=1&dealType=Cycle"
    );
    // console.log(await response.json());
    const data = await response.json();
    return data;
  }

  async getAllDimensons(companyId: number) {
    this.authHttpClient.baseUrl = `https://dev.clarkservices.co.za/Twizza.Sales.WebApi/v1/dimension`;
    try {
      const response = await this.authHttpClient.fetch(
        `/all-dimensions?companyId=${companyId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default DealsService;
