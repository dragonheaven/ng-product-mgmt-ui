import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductsApiService } from '../../../../shared/services/api/products-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {
  products: Product[] = [];
  totalCount = 0;

  constructor(private productsApiService: ProductsApiService) {}

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts = () => {
    this.productsApiService.getAll().subscribe(res => {
      if (res) {
        this.products = res.data;
        this.totalCount = res.totalCount;
      }
    });
  }

  public removeProduct = (id: string) => {
    this.productsApiService.removeProduct(id).subscribe(() => {
      this.initProducts();
    });
  }

  getProductCategories = (product: Product) => {
    return product.categories.map(item => item.name).join(',');
  }
}
