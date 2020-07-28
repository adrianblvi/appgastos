import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeNewComponent } from "./home-new/home-new.component";
import { HomeDetailComponent } from './home-detail/home-detail.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'new',
    component: HomeNewComponent
  }, {
    path: ':PARTEID',
    component: HomeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
