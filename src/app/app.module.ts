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
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {RippleModule} from "primeng/ripple";
import {LoanRequestComponent} from "./modules/loan-request/loan-request/loan-request.component";
import {FieldsetModule} from "primeng/fieldset";
import {LoginComponent} from './auth/login/login.component';
import {NikiComponent} from './modules/niki/niki/niki.component';
import {KatmComponent} from './modules/katm/katm/katm.component';
import {CRegistryComponent} from './modules/c-registry/c-registry/c-registry.component';
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from "./product.service";
import {InputTextareaModule} from "primeng/inputtextarea";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'loanRequest',
    component: LoanRequestComponent
  }
  ,
  {
    path: 'niki',
    component: NikiComponent
  }
  ,
  {
    path: 'katm',
    component: KatmComponent
  }
  ,
  {
    path: 'c-registry',
    component: CRegistryComponent
  },
  { path: '**', redirectTo: 'error' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoanRequestComponent,
    LoginComponent,
    NikiComponent,
    KatmComponent,
    CRegistryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
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
    FieldsetModule,
    TableModule,
    RatingModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    FileUploadModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
