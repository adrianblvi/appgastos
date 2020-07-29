import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { GastoRoutingModule } from './gasto-routing.module';
import { GastoHomeComponent } from './gasto-home/gasto-home.component';
import { GastoDetailComponent } from './gasto-detail/gasto-detail.component';
import { GastoNewComponent } from './gasto-new/gasto-new.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    GastoRoutingModule
  ],
  declarations: [GastoHomeComponent, GastoDetailComponent, GastoNewComponent]
})
export class GastoModule { }
