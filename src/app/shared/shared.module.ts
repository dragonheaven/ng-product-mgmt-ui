import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontsModule } from '../modules/fonts/fonts.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayModalService } from './services/display-modal.service';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ErrorModalComponent } from './components/modals/error-modal/error-modal.component';
import { SuccessModalComponent } from './components/modals/success-modal/success-modal.component';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component';

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageHeaderComponent,
    FontAwesomeModule,
    // NgbModule
  ],
  providers: [
    FontsModule,
    DisplayModalService
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageHeaderComponent,
    ErrorModalComponent,
    SuccessModalComponent,
    ConfirmationModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontsModule
  ],
  entryComponents: []
})

export class SharedModule {
  constructor() {}
}
