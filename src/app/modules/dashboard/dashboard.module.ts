import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { DashboardPageRouting } from './dashboard-routing.module';


import { SharedModule } from '../../shared/shared.module';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { ProductsApiService } from '../../shared/services/api/products-api.service';
import { CategoriesApiService } from '../../shared/services/api/categories-api.service';

@NgModule({
  declarations: [
    HomeComponent,
    StatusCardComponent
  ],
  imports: [
    CommonModule,
    DashboardPageRouting,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ProductsApiService,
    CategoriesApiService
  ]
})
export class DashboardModule { }
