import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationData:Student = new Student();
  errorOccurred: boolean=false;
  error : String="";
  isLoading :boolean=false;
  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  
  submitForm(form:NgForm) {
    // Handle form submission logic here
    this.isLoading=true;
    if(form.valid){
      this.registrationData = form.value as Student;

      console.log(this.registrationData);
  
      this.studentService.addStudent(this.registrationData).subscribe({
        "error":(error:any)=>{
            this.errorOccurred=true;
            this.error=error;
            console.log('An error occurred while adding a student:', error);
            this.isLoading=false;
        },
        "complete": ()=>{
            console.log("Successfully Logged In")
            this.isLoading=false;
        }
      })
    }
    else{
      this.errorOccurred=true;
      this.error="Invalid Form Input";
      //validation error
      this.isLoading=false;
    }
    
    


    // You can send the registrationData to the backend server using HttpClient
  }

}
