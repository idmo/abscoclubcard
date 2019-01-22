import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import {PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SettingsComponent } from './settings/settings.component';
import { PracticeComponent } from './practice/practice.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'good', component: PracticeComponent },
  { path: 'clubcard', component: PurchaseHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
