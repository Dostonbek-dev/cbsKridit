import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfirmationService, MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  selectedValue?: string;
  city: any;
  items: any;
  constructor(private messageService: MessageService,private primengConfig: PrimeNGConfig,
              private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
  }

  moral() {

  }

  physical() {

  }

  save() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Create New Loan Request', life: 3000});
  }

  saveToNiki() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Create New Loan Request And Send To Niki', life: 3000});

  }
}
