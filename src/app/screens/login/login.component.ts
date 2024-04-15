import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: User =new User();
  errorOccurred: boolean=false;
  error : String="";
  isLoading:boolean=false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  submitForm(loginForm: NgForm): void {
    this.isLoading=true;
    if (loginForm.valid) {
      this.loginData=loginForm.value as User;
      console.log(this.loginData)

      this.authService.login(this.loginData).subscribe(
        {
          "error":(error)=>{
              this.errorOccurred=true;
              this.error=error;
              //throw error
              this.isLoading=false;
          },
          "complete": ()=>{
              console.log("Successfully Logged In")
              this.isLoading=false;
          }
        }
      )
    }
    else{
      //throw validation error
      this.errorOccurred=true;
      this.error="Invalid Form Input";
      this.isLoading=false;
    }
    
  }

}
