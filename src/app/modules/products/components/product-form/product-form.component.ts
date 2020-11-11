import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductsUiHelperService } from '../../services/products-ui-helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesApiService } from '../../../../shared/services/api/categories-api.service';
import { ProductsApiService } from '../../../../shared/services/api/products-api.service';
import { Category } from '../../../../shared/models/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent implements OnInit {
  productEditForm: FormGroup;
  productId: string;
  titleHeader: string;
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsUIHelper: ProductsUiHelperService,
    private categoriesApiService: CategoriesApiService,
    private productsApiService: ProductsApiService
  ) {}

  ngOnInit(): void {
    this.productEditForm = this.productsUIHelper.getProductEditForm();
    this.categoriesApiService.getAll().subscribe(res => {
      this.categories = res.data;
    });

    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId !== null) {
      this.productsApiService.getProduct(this.productId).subscribe(res => {
        this.productEditForm.setValue({
          name: res.name,
          description: res.description,
          quantity: res.quantity,
          price: res.price,
          categories: res.categories
        });
      });

      this.titleHeader = 'Edit Product Page';
    } else {
      this.titleHeader = 'Create Product Page';
    }
  }

  public submit = () => {
    const name = this.productEditForm.get('name').value;
    const description = this.productEditForm.get('description').value;
    const price = this.productEditForm.get('price').value;
    const quantity = this.productEditForm.get('quantity').value;
    const categories = this.productEditForm.get('categories').value;

    if (this.productId) {
      this.productsApiService.updateProduct(this.productId, { name, description, price, quantity, categories }).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productsApiService.createProduct({ name, description, price, quantity, categories }).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
