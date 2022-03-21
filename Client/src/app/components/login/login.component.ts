import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  minDate: Moment |any;
  constructor() { }

  ngOnInit(): void {
    this.minDate=new Date();
  }

}
