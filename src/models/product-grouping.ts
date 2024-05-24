import { GroupedProducts } from './grouped-products';
import { Product } from './product';

export class ProductGrouping {
    id: number;
    name: string;
    brandId: number;
    products: Product[];
    groupedProducts: any[];

    constructor(id: number, name: string, brandId: number, products: Product[], groupedProducts: any[]) {
        this.id = id;
        this.name = name;
        this.brandId = brandId;
        this.products = products;
        this.groupedProducts = this.groupProductsByUnitAndSize();
    }

    groupProductsByUnitAndSize() {
        console.log(this.name);
        const groupedProducts = this.products.reduce(
            (acc, product) => {
                const key = `${product.UnitOfMeasure.Abbreviation}-${product.Size}-${product.PackSize}`;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(product);
                return acc;
            },
            {} as Record<string, Product[]>,
        );

        // Converting the grouped object into an array of ProductGrouping
        const result = Object.entries(groupedProducts).map(([key, products]) => {
            const [unitOfMeasurement, size, packSize] = key.split('-');
            return {
                name: this.name,
                unitOfMeasurement,
                size,
                products,
                packSize,
            };
        });

        this.groupedProducts = result;
        console.log(this.groupedProducts);

        return result;
    }
}
