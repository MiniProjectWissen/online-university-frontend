import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {

  studentsByCourse:Student[];
  studentAtt : number[];
  constructor(private cs:CourseService,private ss:StudentService,private ts:TeacherService) { 
    this.studentsByCourse = []
    this.studentAtt = []
  }

  ngOnInit(): void {
    this.getAllStudentsForCourse()
  }

  getAllStudentsForCourse(){
    let courseId = this.cs.selectedCourse.course_id;
    this.ss.getAllStudentsByCourse(courseId).subscribe((res)=>{
      this.studentsByCourse = res as Student[];
      console.log("students by course taken")
    })

  }
  addStudentAttendance(stud_id:number){
    this.studentAtt.push(stud_id);
    console.log(stud_id);
    console.log(this.studentAtt)
  }
  updateStudentAttendance(){
    for(let i=0;i<this.studentAtt.length;i++){
      this.ts.updateStudentAttendance(this.studentAtt[i],this.cs.selectedCourse.course_id).subscribe({
        "error":(error:any)=>{
         
          console.log('An error occurred while adding a student:', error);
      },
      "complete": ()=>{
          console.log("Attendance done")
      }
      })
    }
  }

}
