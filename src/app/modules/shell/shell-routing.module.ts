import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const ShellPageRouting: ModuleWithProviders<any> = RouterModule.forChild(routes);
