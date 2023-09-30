import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainTableComponent } from './views/main-table/main-table.component';

import { DxDataGridModule } from 'devextreme-angular';
import { IssuesTableComponent } from './views/issues-table/issues-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    IssuesTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
