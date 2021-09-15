import {Component, OnInit,} from '@angular/core';
import {ProductService} from "../../../Services/product.service";
import {MenuItem, PrimeNGConfig} from 'primeng/api';
import {MessageService} from 'primeng/api';
import * as XLSX from "xlsx";
import {ProductModel} from "../../../model/product";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css'],
})
export class LoanRequestComponent implements OnInit {
  fileName = "ExcelSheet.xlsx"

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
  registerId = "0033223423232"

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
  loading = false;
  productList: ProductModel[] = [];
  formData: any;


  constructor(private productService: ProductService, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.productList = this.productService.products;
    this.primengConfig.ripple = true;
    this.items = [{
      label: 'Операция',
      items: [{
        label: 'Отклонение кредитной заявки',
        icon: 'pi pi-directions-alt',
        styleClass: 'color:red',
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
          label: 'Отправка НИКИ и АСОКИ',
          icon: 'pi pi-external-link',
          command: () => {
            this.sendDataToNikiAndKatm()
          }
        }
      ]
    },
    ];


  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  openRejectDialog() {
    this.dialogForRejectedLoan = true;
  }


  search() {
    console.log(this.registerNumber, this.idClientNumber, this.clientName, this.currency, this.creditStatus, this.termOfUseTheLoan, this.dataFrom, this.dataTo)
    this.registerNumber = ''
    this.idClientNumber = ''
    this.clientName = ''
    this.currency = ''
    this.creditStatus = ''
    this.termOfUseTheLoan = ''
    this.dataFrom = ''
    this.dataTo = ''
  }

  openMenu(toggle: void, idClientNumber: any) {

  }

  sendDataToNikiAndKatm() {
    this.messageService.add({severity: 'success', summary: 'Send', detail: 'Successfully sending to Niki And Katm'});
  }

  viewOpenRejected() {
    this.viewLoanReq = true
  }

  updateLoanReqe() {
    this.updateLoanReq = true
  }
  exportExcel(): void {
    let element = document.getElementById("loanExport");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName)
  }

  onSubmit(f: NgForm) {

  }
}
