import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeNewComponent } from "./home-new/home-new.component";
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeGastoNewComponent } from './home-gasto-new/home-gasto-new.component';
import { HomeGastoDetailComponent } from './home-gasto-detail/home-gasto-detail.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: ':IDPARTE/new',
    component: HomeGastoNewComponent
  }, {
    path: 'new',
    component: HomeNewComponent
  }, {
    path: ':IDPARTE/:ID',
    component: HomeGastoDetailComponent
  }, {
    path: ':IDPARTE',
    component: HomeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
