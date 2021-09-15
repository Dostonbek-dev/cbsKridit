import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reject-loan-request',
  templateUrl: './reject-loan-request.component.html',
  styleUrls: ['./reject-loan-request.component.css']
})
export class RejectLoanRequestComponent implements OnInit {
  registerId: any;
  dialogForRejectedLoan!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  rejectedLoanReq() {

  }
}
