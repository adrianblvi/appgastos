import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { GastoModule } from './gasto/gasto.module';
import { SpendingsModule } from './spendings/spendings.module';

export function loadHomeModule() {
  return HomeModule;
}
export function loadGastosModule() {
  return GastoModule;
}
export function loadSpendingsModule() {
  return SpendingsModule;
}
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      }, {
        path: 'gasto',
        loadChildren: loadGastosModule
      }, {
        path: 'spendings',
        loadChildren: loadSpendingsModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
