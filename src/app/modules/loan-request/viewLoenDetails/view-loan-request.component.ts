import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-loan-request',
  templateUrl: './view-loan-request.component.html',
  styleUrls: ['./view-loan-request.component.css']
})
export class ViewLoanRequestComponent implements OnInit {
  viewLoanReq!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
