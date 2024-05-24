import { Deal, DealType } from '../models/deal';

import { AuthHttpClient } from './auth-http-client';
import { inject } from 'aurelia';

@inject(AuthHttpClient)
export class DealsService {
    constructor(public authHttpClient: AuthHttpClient) {}

    getCustomersDeals(status?: string, customerId?: number, companyId?: number, page?: number, limit?: number, filter?: string): Promise<Deal[]> {
        return this.getDeals(false, 'Default', status, customerId, companyId, page, limit, filter);
    }

    getChainDeals(status?: string, companyId?: number, page?: number, limit?: number, filter?: string): Promise<Deal[]> {
        return this.getDeals(true, 'Default', status, null, companyId, page, limit, filter);
    }

    getListDeals(status?: string, companyId?: number, page?: number, limit?: number, filter?: string): Promise<Deal[]> {
        return this.getDeals(false, 'List', status, null, companyId, page, limit, filter);
    }

    async getCycleDeals(status?: string, companyId?: number, page?: number, limit?: number, filter?: string) {
        return this.getDeals(false, 'Cycle', status, null, companyId, page, limit, filter);
    }

    async getPromoDeals(status?: string, customerId?: number, companyId?: number, page?: number, limit?: number, filter?: string) {
        return this.getDeals(false, 'Promo', status, customerId, companyId, page, limit, filter);
    }

    async getDeals(
        chainDeals?: boolean,
        dealType?: string,
        status?: string,
        customerId?: number,
        companyId?: number,
        page?: number,
        limit?: number,
        filter?: string,
    ) {
        this.authHttpClient.baseUrl = 'https://api.clarkservices.tech/sales/';
        let URL;
        URL = `v1/deal/searchdeals/${chainDeals}`;

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
            URL += `?${params.join('&')}`;
        }

        try {
            const response = await this.authHttpClient.fetch(`${URL}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return [];
        }
    }

    async getAllDimensons(companyId: number) {
        this.authHttpClient.baseUrl = `https://api.clarkservices.tech/sales/v1/dimension`;
        try {
            const response = await this.authHttpClient.fetch(`/all-dimensions?companyId=${companyId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return [];
        }
    }

    async getDeal(dealId: number, dealType: string) {
        this.authHttpClient.baseUrl = `https://api.clarkservices.tech/sales/v1/deal/${dealType}/`;
        try {
            const response = await this.authHttpClient.fetch(`${dealId}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    async getProductCategories(companyId: number) {
        this.authHttpClient.baseUrl = `https://api.clarkservices.tech/sales/v1/deal/getproductcategories/`;

        try {
            const response = await this.authHttpClient.fetch(`${companyId}`);
            const data = await response.json();
            return data;
        } catch (error) {}
    }

    async queryCustomerPriceDeals(companyId: number, customerId: number, productId: number, effectiveDate: moment.Moment): Promise<Deal[]> {
        this.authHttpClient.baseUrl = `https://api.clarkservices.tech/sales/v1/deal/customer-price-query`;

        try {
            const response = await this.authHttpClient.fetch(
                `?companyId=${companyId}&customerId=${customerId}&productId=${productId}&effectiveDate=${effectiveDate.toISOString()}`,
            );
            const data = await response.json();
        } catch (error) {
            return await error;
        }
    }
}

export default DealsService;
