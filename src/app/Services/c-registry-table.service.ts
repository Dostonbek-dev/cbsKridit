import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CRegistryTable} from "../modules/c-registry/c-registry-table";

@Injectable({
  providedIn: 'root'
})
export class CRegistryTableService {
    tableData:CRegistryTable[]=[
      {
        regRequest: 1165,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'Javohir Majidov',
        pledger: 'Davr Bank'
      },{
        regRequest: 1165,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'Javohir Majidov',
        pledger: 'Davr Bank'
      },{
        regRequest: 1165,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'Javohir Majidov',
        pledger: 'Davr Bank'
      },{
        regRequest: 1165,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'Javohir Majidov',
        pledger: 'Davr Bank'
      },{
        regRequest: 1165,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'Javohir Majidov',
        pledger: 'Davr Bank'
      },{
        regRequest: 1165,
        clientID: 1156,
        pledgerCode: 35795,
        recordCodeCR: 67887,
        borrower: 'Javohir Majidov',
        pledger: 'Davr Bank'
      },{
        regRequest: 1165,
        clientID: 1156,
        pledgerCode: 15764,
        recordCodeCR: 63334,
        borrower: 'User',
        pledger: 'Davr Bank'
      },{
        regRequest: 23455,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'User2',
        pledger: 'Davr Bank'
      },{
        regRequest: 2565,
        clientID: 1156,
        pledgerCode: 54456,
        recordCodeCR: 666356,
        borrower: 'User3',
        pledger: 'Davr Bank'
      },{
        regRequest: 1002,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'User4',
        pledger: 'Davr Bank'
      },{
        regRequest: 1002,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'User5',
        pledger: 'Davr Bank'
      },{
        regRequest: 1002,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'User6',
        pledger: 'Davr Bank'
      },{
        regRequest: 1002,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'User7',
        pledger: 'Davr Bank'
      },{
        regRequest: 1002,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'User8',
        pledger: 'Davr Bank'
      },{
        regRequest: 1002,
        clientID: 1156,
        pledgerCode: 1564,
        recordCodeCR: 1026,
        borrower: 'User9',
        pledger: 'Davr Bank'
      }
      ]
  constructor() {}
}
