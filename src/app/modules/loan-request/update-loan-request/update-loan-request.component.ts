import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-loan-request',
  templateUrl: './update-loan-request.component.html',
  styleUrls: ['./update-loan-request.component.css']
})
export class UpdateLoanRequestComponent implements OnInit {
  updateLoanReq!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  updateLoanRequest() {

  }
}
