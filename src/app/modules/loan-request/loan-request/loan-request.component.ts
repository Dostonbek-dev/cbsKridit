import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../../table/product";
import { ProductService} from "../../../table/product.service";
import {ConfirmationService, MenuItem, PrimeNGConfig} from 'primeng/api';
import { MessageService } from 'primeng/api';
import Table from '../loan-request/Table.json';
import * as XLSX from "xlsx"
@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css'],
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
})
export class LoanRequestComponent implements OnInit {
  fileName="ExcelSheet.xlsx"
  tableList: { regNumber: String, Status: String, clientID: String, clientName: String, clientType: String, Amount: String,
    Date: String, loanMaturityDate: String, Currency: String, interestRate: String, loanType: String, loanPurpose: String
  }[]=Table;

  //@ts-ignore
  productDialog: boolean;
  //@ts-ignore
  products: Product[];
  //@ts-ignore
  product: Product;
  //@ts-ignore
  selectedProducts: Product[];
  //@ts-ignore
  submitted: boolean;

  //@ts-ignore
  items: MenuItem[];
  registerId="0033223423232"

  // @ts-ignore
  registerNumber: any;
  idClientNumber: any;
  clientName: any;
  currency: any;
  creditStatus: any;
  termOfUseTheLoan: any;
  dataFrom: any;
  dataTo: any;
  // @ts-ignore
  dialogForRejectedLoan: boolean;
  // @ts-ignore
  viewLoanReq: boolean;
  // @ts-ignore
  updateLoanReq: boolean;


  constructor(private productService: ProductService,private messageService: MessageService,private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
    this.primengConfig.ripple = true;
    this.items = [{
      label: 'Операция',
      items: [{
        label: 'Отклонение кредитной заявки',
        icon: 'pi pi-directions-alt',
        styleClass:'color:red',
        command: () => {
          this.openRejectDialog()
        }
      },
        {
          label: 'Изменить кредитную заявку',
          icon: 'pi pi-pencil',
          command: () => {
            this.updateLoanReqe()
          }
        },
        {
          label: 'Просмотр деталей кредитной заявки',
          icon: 'pi pi-eye',
          command: () => {
            this.viewOpenRejected()
          }
        },
        {
          label: 'Отправка НИКИ и АСОКИ                   ',
          icon: 'pi pi-external-link',
          command: () => {
            this.sendDataToNikiAndKatm()
          }
        }
      ]},
    ];


  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  openRejectDialog(){
    this.dialogForRejectedLoan=true;
  }


  search() {
    console.log(this.registerNumber, this. idClientNumber, this. clientName, this. currency, this. creditStatus, this. termOfUseTheLoan, this.dataFrom, this.dataTo)
    this.registerNumber=''
    this.idClientNumber=''
    this.clientName=''
    this.currency=''
    this.creditStatus=''
    this.termOfUseTheLoan=''
    this.dataFrom=''
    this.dataTo=''
  }

  openMenu(toggle: void, idClientNumber: any) {

  }

  sendDataToNikiAndKatm(){
    this.messageService.add({severity:'success', summary:'Send', detail:'Successfully sending to Niki And Katm'});
  }

  viewOpenRejected(){
    this.viewLoanReq=true
  }
  updateLoanReqe(){
    this.updateLoanReq=true
  }

  rejectedLoanReq() {
    this.messageService.add({severity:'success', summary:'reject', detail:'Successfully Reject Loan Request'});
    this.dialogForRejectedLoan=false
  }

  updateLoanRequest() {
    this.updateLoanReq=false
    this.messageService.add({severity:'success', summary:'Update', detail:'Successfully Updated Loan Request', icon:'pi-check-square'});
  }
  exportExcel():void{
    let element =document.getElementById("excel-table");
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);

    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");

    XLSX.writeFile(wb,this.fileName)
  }

}
