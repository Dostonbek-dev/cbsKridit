import { Component } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class AppComponent {

  constructor() {}

}
