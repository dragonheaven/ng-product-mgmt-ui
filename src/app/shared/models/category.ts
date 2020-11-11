export interface Category {
  id: string;
  name: string;
  description: string;
  productsCount: number;
}


export interface CategoriesResponse {
  data: Category[];
  totalCount: number;
}
