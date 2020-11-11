import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {CategoryFormComponent} from './components/category-form/category-form.component';
import {CategoryListComponent} from './components/category-list/category-list.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'create', component: CategoryFormComponent },
  { path: ':id/edit', component: CategoryFormComponent }
];

export const CategoriesPageRouting: ModuleWithProviders<any> = RouterModule.forChild(routes);
