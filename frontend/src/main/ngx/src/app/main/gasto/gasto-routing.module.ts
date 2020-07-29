import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastoHomeComponent } from './gasto-home/gasto-home.component';
import { GastoDetailComponent } from './gasto-detail/gasto-detail.component';
import { GastoNewComponent } from './gasto-new/gasto-new.component';

const routes: Routes = [
  {
    path: '',
    component: GastoHomeComponent
  }, {
    path: 'new',
    component: GastoNewComponent
  }, {
    path: ':ID',
    component: GastoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastoRoutingModule { }
