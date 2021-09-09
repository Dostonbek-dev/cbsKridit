import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {
  }

  moral() {

  }

  physical() {

  }

  save() {

  }
}
