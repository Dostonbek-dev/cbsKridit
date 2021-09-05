import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenubarModule} from "primeng/menubar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {TabViewModule} from "primeng/tabview";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {ToolbarModule} from "primeng/toolbar";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {RippleModule} from "primeng/ripple";
const  routes:Routes=[
  {
    path: '',
    component: HeaderComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MenubarModule,
    BrowserAnimationsModule,
    SharedModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    ConfirmDialogModule,
    ToastModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
