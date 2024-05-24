import { Datepicker } from 'mdb-ui-kit';
import { Product } from './../../models/product';
import { ProductGrouping } from './../../models/product-grouping';
import { RoutingInstruction } from '@aurelia/router';
import { State } from 'src/state';
import { bindable } from 'aurelia';
import { connectTo } from '@aurelia/store-v1';

@connectTo<State>()
export class CreateDeal {
    constructor() {}

    @bindable company;
    parameters;

    async load(parameters) {
        this.parameters = parameters;
    }

    attached() {
        console.log(this.state);

        this.groupProducts();
        this.loadDatePicker();
    }

    public state: State;
    public groupedProducts = [];

    groupProducts() {
        let allProducts: ProductGrouping[] = [];
        this.state.productCategories.forEach(x => {
            if (x.Products.length > 0) {
                const product = new ProductGrouping(x.Id, x.Name, x.BrandId, x.Products, []);
                allProducts.push(product);
            }
        });

        allProducts.forEach(x => {
            this.groupedProducts = [...this.groupedProducts, ...x.groupedProducts];
        }),
            console.log(this.groupedProducts);
    }

    loadDatePicker() {
        const options = {
            format: 'dd-mm-yyyy',
        };
        const myDatepicker = new Datepicker(document.getElementById('myDatepicker'), options);
        const myDatepicker2 = new Datepicker(document.getElementById('myDatepicker2'), options);
    }

    test() {
        console.log(this.groupedProducts);
    }
}
