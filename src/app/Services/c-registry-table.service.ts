import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CRegistryTable} from "../modules/c-registry/c-registry-table";

@Injectable({
  providedIn: 'root'
})
export class CRegistryTableService {
    tableData:CRegistryTable[]=[
      {
        regRequest:1165,
        clientID:1156,
        pledgerCode:1564,
        recordCodeCR:1026,
        borrower:'Javohir Majidov',
        pledger:'Davr Bank'
      }
    ]


  constructor() { }
}
