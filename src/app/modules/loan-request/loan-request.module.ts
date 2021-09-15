import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLoanRequestComponent } from './viewLoenDetails/view-loan-request.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { UpdateLoanRequestComponent } from './update-loan-request/update-loan-request.component';
import {InputTextModule} from "primeng/inputtext";
import { RejectLoanRequestComponent } from './reject-loan-request/reject-loan-request.component';


@NgModule({
    declarations: [
        ViewLoanRequestComponent,
        UpdateLoanRequestComponent,
        RejectLoanRequestComponent
    ],
  exports: [
    ViewLoanRequestComponent,
    UpdateLoanRequestComponent,
    RejectLoanRequestComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    InputTextModule
  ]
})
export class LoanRequestModule {
  constructor() {}
}
