import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap JS
import { TooltipModule, RatingModule, SortableModule, TypeaheadModule, BsDropdownModule, CollapseModule, TabsModule } from 'ngx-bootstrap';
import { PracticeComponent } from './practice/practice.component';
import { PodComponent } from './pod/pod.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    PodComponent
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
