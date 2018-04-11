import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string = "HELLLO";
  constructor() { }

  ngOnInit() {
   this.title = "YA YA YA ";
  }

}
