import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainTableComponent } from './views/main-table/main-table.component';

import { DxDataGridModule } from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular';
import { DxLoadPanelModule } from 'devextreme-angular';
import { TestPrizmComponent } from './views/test-prizm/test-prizm.component';
import { PrizmButtonModule } from "@prizm-ui/components";
import {  } from "@prizm-ui/icons";

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    TestPrizmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDataGridModule,
    DxPopupModule,
    DxLoadPanelModule,
    PrizmButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
