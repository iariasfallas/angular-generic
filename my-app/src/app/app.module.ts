import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { TreeModule } from 'ng2-tree';

@NgModule({
  declarations: [
    AppComponent,
    SchedulePageComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
