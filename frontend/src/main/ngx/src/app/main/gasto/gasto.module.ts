import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { GastoRoutingModule } from './gasto-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    GastoRoutingModule
  ],
  declarations: []
})
export class GastoModule { }
