import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  

  submitForm(loginForm: NgForm): void {
    if (loginForm.valid) {
      // Logic to handle form submission
      console.log('Login data:', this.loginData);
    }
  }

}
