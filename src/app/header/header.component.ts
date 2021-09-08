import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:any;

  constructor(private Route:Router) {}
    ngOnInit() {
    this.data=new Date()
    }

  LogOut() {
    this.Route.navigate(['/logout'])
  }
}
