import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [
    {
      regNumber: '4545',
      Status: 'Active',
      clientID: '111',
      clientName: 'Dilshodbek',
      clientType: 'Moral',
      Amount: '100000',
      loanDate: '12.12.23',
      loanMaturityDate: '02.03.20',
      Currency: 'UZS',
      interestRate: '15',
      loanType: 'Long term',
      loanPurpose: 'SHtlIndvdl',
    }, {
      regNumber: '656',
      Status: 'Active',
      clientID: '111',
      clientName: 'Dilshodbek',
      clientType: 'Moral',
      Amount: '100000',
      loanDate: '12.12.23',
      loanMaturityDate: '02.03.20',
      Currency: 'UZS',
      interestRate: '15',
      loanType: 'Long term',
      loanPurpose: 'SHtlIndvdl',
    }, {
      regNumber: '325',
      Status: 'Active',
      clientID: '111',
      clientName: 'Dilshodbek',
      clientType: 'Moral',
      Amount: '100000',
      loanDate: '12.12.23',
      loanMaturityDate: '02.03.20',
      Currency: 'UZS',
      interestRate: '15',
      loanType: 'Long term',
      loanPurpose: 'SHtlIndvdl',
    }, {
      regNumber: '217',
      Status: 'Active',
      clientID: '111',
      clientName: 'Dilshodbek',
      clientType: 'Moral',
      Amount: '100000',
      loanDate: '12.12.23',
      loanMaturityDate: '02.03.20',
      Currency: 'UZS',
      interestRate: '15',
      loanType: 'Long term',
      loanPurpose: 'SHtlIndvdl',
    },
    {
      regNumber: '656',
      Status: 'Active',
      clientID: '111',
      clientName: 'Dilshodbek',
      clientType: 'Moral',
      Amount: '100000',
      loanDate: '12.12.23',
      loanMaturityDate: '02.03.20',
      Currency: 'UZS',
      interestRate: '15',
      loanType: 'Long term',
      loanPurpose: 'SHtlIndvdl',
    }, {
      regNumber: '325',
      Status: 'Active',
      clientID: '111',
      clientName: 'Dilshodbek',
      clientType: 'Moral',
      Amount: '100000',
      loanDate: '12.12.23',
      loanMaturityDate: '02.03.20',
      Currency: 'UZS',
      interestRate: '15',
      loanType: 'Long term',
      loanPurpose: 'SHtlIndvdl',
    }, {
      regNumber: '217',
      Status: 'Active',
      clientID: '111',
      clientName: 'Dilshodbek',
      clientType: 'Moral',
      Amount: '100000',
      loanDate: '12.12.23',
      loanMaturityDate: '02.03.20',
      Currency: 'UZS',
      interestRate: '15',
      loanType: 'Long term',
      loanPurpose: 'SHtlIndvdl',
    },

  ]


  constructor(private http: HttpClient) {
  }
}
