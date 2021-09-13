import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../../table/product";
import { ProductService} from "../../../table/product.service";
import {ConfirmationService, MenuItem, PrimeNGConfig} from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-c-registry',
  templateUrl: './c-registry.component.html',
  styleUrls: ['./c-registry.component.css']
})
export class CRegistryComponent implements OnInit {

  //@ts-ignore
  showDisplay: boolean;

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
  menu: any;


  constructor(private productService: ProductService,private messageService: MessageService,private primengConfig: PrimeNGConfig,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
    this.primengConfig.ripple = true;
    this.items = [{
      label: 'Операция',
      items: [{
        label: 'Изменить ',
        icon: 'pi pi-pencil',
        styleClass:'color:red',
        command: () => {

        }
      },
        {
          label: 'Отправка залогового реестра ',
          icon: 'pi pi-external-link',
          command: () => {

          }
        },
        {
          label: 'Закрыть реестр ',
          icon: 'pi pi-times-circle',
          command: () => {

          }
        },
        {
          label: 'Получение выписки                   ',
          icon: 'pi pi-check',
          command: () => {

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

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        //@ts-ignore
        this.selectedProducts = null;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  editProduct(product: Product) {
    this.product = {...product};
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    //@ts-ignore
    if (this.product.name.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }
      else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
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

}
