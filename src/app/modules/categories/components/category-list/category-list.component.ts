import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../../shared/models/category';
import {CategoriesApiService} from '../../../../shared/services/api/categories-api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  totalCount = 0;

  constructor(private categoriesApiService: CategoriesApiService) {}

  ngOnInit(): void {
    this.initCategories();
  }

  initCategories = () => {
    this.categoriesApiService.getAll().subscribe(res => {
      if (res) {
        this.categories = res.data;
        this.totalCount = res.totalCount;
      }
    });
  }

  public removeCategory = (id: string) => {
    this.categoriesApiService.removeCategory(id).subscribe(() => {
      this.initCategories();
    });
  }
}
