import { Store, connectTo } from '@aurelia/store-v1';
import { setCustomerDimensions, setProductCategories } from './actions';

import { CreateDeal } from './pages/Deals/create-deal';
import { CustomerPrice } from './pages/Queries/customer-price';
import { Deals } from './pages/Deals/deals';
import DealsService from './services/deals-service';
import { Home } from './pages/Home/home';
import { PurchaseOrders } from './pages/PurchaseOrders/purchase-orders';
import { State } from './state';
import { inject } from 'aurelia';

@connectTo()
@inject(Store, DealsService)
export class MyApp {
    constructor(
        private store: Store<State>,
        private dealsService: DealsService,
    ) {}
    appLoading: boolean = false;
    public state: State;
    static routes = [
        {
            path: '',
            component: Home,
            title: 'Home',
        },
        {
            path: '/deals',
            component: Deals,
            title: 'Deals',
        },
        {
            path: '/purchase-orders',
            component: PurchaseOrders,
            title: 'Purchase Orders',
        },
        {
            path: '/customer-price',
            component: CustomerPrice,
            title: 'Customer Price Query',
        },
        {
            path: '/deals/create-deal',
            component: CreateDeal,
            title: 'Create Deal',
        },
    ];

    async attaching() {
        try {
            console.log('starting attached');
            this.appLoading = true;
            this.store.registerAction('setCustomerDimensions', setCustomerDimensions);
            this.store.registerAction('setProductCategories', setProductCategories);
            const dimensions = await this.dealsService.getAllDimensons(1);
            const productCategories = await this.dealsService.getProductCategories(1);
            await this.setDefaultDimensions(dimensions);
            await this.setProductCategories(productCategories);
            console.log(this.state, 'logged state');
        } finally {
            this.appLoading = false;
        }
    }

    async setDefaultDimensions(dimensions) {
        await this.store.dispatch(setCustomerDimensions, dimensions);
    }

    async setProductCategories(categoris) {
        await this.store.dispatch(setProductCategories, categoris);
    }
}
