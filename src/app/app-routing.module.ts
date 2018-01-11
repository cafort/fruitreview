import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitComponent } from "./fruit/fruit.component";
import { FruitDetailComponent } from "./fruit-detail/fruit-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/fruits', pathMatch: 'full'},
  {path: 'fruits', component: FruitComponent},
  {path: 'detail/:id', component: FruitDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
