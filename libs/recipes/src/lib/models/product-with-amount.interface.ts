import { Product } from '../models/product.interface';

export interface ProductWithAmount extends Product {
  amount: number;
}
