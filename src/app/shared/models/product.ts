import { Category } from './category';

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  categories: Category[];
}

export interface ProductsResponse {
  data: Product[];
  totalCount: number;
}
