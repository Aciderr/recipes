import { ProductWithAmount } from './product-with-amount.interface';

export interface Recipe {
  id: string;
  name: string;
  preparationTimeInMinutes: number;
  products: ProductWithAmount[];
}
