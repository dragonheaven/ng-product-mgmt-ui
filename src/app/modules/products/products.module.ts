import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { ProductsPageRouting } from './products-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { ProductsUiHelperService } from './services/products-ui-helper.service';
import { ProductsApiService } from '../../shared/services/api/products-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesApiService } from '../../shared/services/api/categories-api.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductsUiHelperService,
    ProductsApiService,
    CategoriesApiService
  ]
})

export class ProductsModule { }
