import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeGastoNewComponent } from './home-gasto-new/home-gasto-new.component';
import { HomeGastoDetailComponent } from './home-gasto-detail/home-gasto-detail.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule,
    MatDialogModule
  ],
  declarations: [
    HomeComponent,
    HomeNewComponent,
    HomeDetailComponent,
    HomeGastoNewComponent,
    HomeGastoDetailComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class HomeModule { }
