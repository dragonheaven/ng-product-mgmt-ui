import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { ShellPageRouting } from './shell-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ShellPageRouting,
    SharedModule
  ]
})
export class ShellModule { }
