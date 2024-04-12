import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';
import { Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  flag: boolean;
  student:Student;
  studentSubscription: Subscription;

  constructor(private studentService: StudentService) { 
    this.flag = true;
    //this.student = studentService.selectedStudent;
    this.studentSubscription = new Subscription();
    this.student=studentService.student;
  }

  ngOnInit(): void {
    this.getStudentProfile(); 
  }

  getStudentProfile(){
    let storedString = localStorage.getItem('userId');

    if (storedString !== null && storedString !== undefined) {
    storedString = storedString.replace(/"/g, '');

    this.studentSubscription = this.studentService.getStudentByEmail(storedString).subscribe(
      (student: Student) => {
        this.studentService.student = student;
        this.student = this.studentService.student;
        console.log('Received student data:', student);
      }
     
      )
    // Now storedString does not contain any double quotes
    console.log(storedString);
}
  }
  allowEdit():void{
        this.flag  = false;
  }
  onSubmit(){
    this.studentService.updateStudent(this.student.stud_id,this.student).subscribe(
      {
        "error":(error:any)=>{
            console.log('An error occurred while adding a student:', error);
        },
        "complete": ()=>{
            console.log("Successfully Updated Profile")
            this.getStudentProfile()
        }
      }


    )
    console.log(this.student)
    this.flag = true;
  }
}
