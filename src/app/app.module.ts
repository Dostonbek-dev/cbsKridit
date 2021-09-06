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
import {LoanRequestComponent} from "./modules/loan-request/loan-request/loan-request.component";
import {FieldsetModule} from "primeng/fieldset";

const  routes:Routes=[
  {
    path: '',
    component: HeaderComponent
   },
  {
    path: 'loanRequest',
    component: LoanRequestComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoanRequestComponent
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
    RippleModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
