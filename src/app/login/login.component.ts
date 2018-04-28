import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  private formSubmitAttempt: boolean;
  title:string = "HELLLO";

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
   this.formLogin = this.fb.group({
    userName: ['',Validators.required],
    password: ['',Validators.required]
   });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.formLogin.get(field).valid && this.formLogin.get(field).touched) ||
      (this.formLogin.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(){
    if(this.formLogin.valid) {
      //call service to try login;
      console.log(this.formLogin.value);
    }
    this.formSubmitAttempt = true;
  }

}
