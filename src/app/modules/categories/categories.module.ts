import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

import { CategoriesPageRouting } from './categories-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { CategoriesUiHelperService } from './services/categories-ui-helper.service';
import { CategoriesApiService } from '../../shared/services/api/categories-api.service';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesPageRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CategoriesUiHelperService,
    CategoriesApiService
  ]
})

export class CategoriesModule { }
