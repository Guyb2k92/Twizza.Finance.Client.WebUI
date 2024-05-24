import { NavDimension } from './models/nav-dimensions';
import { ProductCategory } from './models/product-category';
import { State } from './state';

export const setCustomerDimensions = (state: State, customerDimensions: NavDimension[]) => {
    const newState = Object.assign({}, state);
    newState.customerDimensions = [...newState.customerDimensions, ...customerDimensions];
    return newState;
};

export const setProductCategories = (state: State, productCategories: ProductCategory[]) => {
    const newState = Object.assign({}, state);
    newState.productCategories = [...newState.productCategories, ...productCategories];
    return newState;
};
