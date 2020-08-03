import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { FormsModule } from '@angular/forms';
import { SpendingsRoutingModule } from './spendings-routing.module';
import { SpendigsService } from './spendigs.service';
import { SpendingHomeComponent } from './spending-home/spending-home.component';

@NgModule({
  imports: [
    CommonModule,
    SpendingsRoutingModule,
    OntimizeWebModule,
    FormsModule
  ],
  declarations: [SpendingHomeComponent],
  providers: [
    SpendigsService
  ],
  exports: [
    SpendingHomeComponent
  ]
})
export class SpendingsModule { }
