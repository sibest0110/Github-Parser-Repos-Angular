import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainTableComponent } from './views/main-table/main-table.component';
import { IssuesTableComponent } from './views/issues-table/issues-table.component';

import { DxDataGridModule } from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular';

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
    DxPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
