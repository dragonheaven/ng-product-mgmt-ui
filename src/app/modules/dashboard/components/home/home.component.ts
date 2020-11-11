import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../../shared/services/api/products-api.service';
import { CategoriesApiService } from '../../../../shared/services/api/categories-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  productsCount = 0;
  categoriesCount = 0;

  constructor(
    private productsApiService: ProductsApiService,
    private categoriesApiService: CategoriesApiService
  ) {}

  ngOnInit(): void {
    this.productsApiService.getAll().subscribe(res => {
      this.productsCount = res.totalCount;
    });

    this.categoriesApiService.getAll().subscribe(res => {
      this.categoriesCount = res.totalCount;
    });
  }
}
