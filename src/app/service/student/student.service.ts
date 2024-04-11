import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudent:Student;
  students:Student[];
  constructor() { 
    this.selectedStudent = {password:"",first_name:"fname",last_name:"lName",email:"xyz@abc.com",phone_number:"xxx",address:"",standard:0,roll_no:"roll",gender:"m/f",dob:new Date()}
    this.students = [];
  }
}
