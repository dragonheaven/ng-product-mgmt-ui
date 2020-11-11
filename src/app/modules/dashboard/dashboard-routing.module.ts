import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

export const DashboardPageRouting: ModuleWithProviders<any> = RouterModule.forChild(routes);
