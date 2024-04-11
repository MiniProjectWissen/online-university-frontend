import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  flag: boolean;
  student:Student;
  constructor(ss: StudentService) { 
    this.flag = true;
    this.student = ss.selectedStudent;
  }

  ngOnInit(): void {
  }

  allowEdit():void{
        this.flag  = false;
  }
  onSubmit(){
    console.log(this.student)
    this.flag = true;
  }
}
