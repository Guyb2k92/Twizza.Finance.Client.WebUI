import { NavDimension } from './models/nav-dimensions';
import { ProductCategory } from './models/product-category';

// state.ts
export interface State {
    customerDimensions: NavDimension[];
    productCategories: ProductCategory[];
}

export const initialState: State = {
    customerDimensions: [],
    productCategories: [],
};
