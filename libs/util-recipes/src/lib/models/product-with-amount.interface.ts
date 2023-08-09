import { Product } from './product.interface';

export interface ProductWithAmount extends Product {
  amount: number;
}
