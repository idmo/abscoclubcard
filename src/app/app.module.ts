import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap JS
import { TooltipModule, RatingModule, SortableModule, TypeaheadModule, BsDropdownModule, CollapseModule, TabsModule } from 'ngx-bootstrap';
import { PracticeComponent } from './practice/practice.component';
import { PodComponent } from './pod/pod.component';
import { NavComponent } from './nav/nav.component';
import { SettingsComponent } from './settings/settings.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { DealsComponent } from './deals/deals.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SubnavComponent } from './subnav/subnav.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    PodComponent,
    NavComponent,
    SettingsComponent,
    ListComponent,
    CartComponent,
    PurchaseHistoryComponent,
    DealsComponent,
    RecipesComponent,
    SearchComponent,
    HomeComponent,
    SubnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
