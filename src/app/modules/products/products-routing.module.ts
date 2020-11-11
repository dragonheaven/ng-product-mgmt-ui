import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'create', component: ProductFormComponent },
  { path: ':id/edit', component: ProductFormComponent }
];

export const ProductsPageRouting: ModuleWithProviders<any> = RouterModule.forChild(routes);

