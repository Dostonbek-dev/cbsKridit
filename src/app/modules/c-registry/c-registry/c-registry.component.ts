import { Component, OnInit, Input } from '@angular/core';
import { ProductService} from "../../../Services/product.service";
import {ConfirmationService, MenuItem, PrimeNGConfig} from 'primeng/api';
import { MessageService } from 'primeng/api';
import {CRegistryTable} from "../c-registry-table";
import {CRegistryTableService} from "../../../Services/c-registry-table.service";

@Component({
  selector: 'app-c-registry',
  templateUrl: './c-registry.component.html',
  styleUrls: ['./c-registry.component.css']
})
export class CRegistryComponent implements OnInit {


  //@ts-ignore
  tableData: CRegistryTable[] = [];


  //@ts-ignore
  items: MenuItem[];
  registerId="0033223423232"

  // @ts-ignore
  registerNumber: any;
  idClientNumber: any;
  product:any;
  clientName: any;
  currency: any;
  creditStatus: any;
  termOfUseTheLoan: any;
  dataFrom: any;
  dataTo: any;
  menu: any;
  loading!: false;


  constructor(private productService: ProductService,private messageService: MessageService,private primengConfig: PrimeNGConfig,
              private cRegistryTableService:CRegistryTableService) {}

  ngOnInit() {
    this.tableData=this.cRegistryTableService.tableData
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
          label: 'Получение выписки  ',
          icon: 'pi pi-download',
          command: () => {
          }
        }
      ]},
    ];
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
