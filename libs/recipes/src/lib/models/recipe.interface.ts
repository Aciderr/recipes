import { ProductWithAmount } from '../models/product-with-amount.interface';

export interface Recipe {
  id: string;
  name: string;
  preparationTimeInMinutes: number;
  products: ProductWithAmount[];
}
