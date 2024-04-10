import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    address: '',
    phone_number: '',
    gender: '',
    dob: '',
    roll_no: '',
    standard: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  
  submitForm(form:NgForm) {
    // Handle form submission logic here
    console.log(this.registrationData);
    // You can send the registrationData to the backend server using HttpClient
  }

}
