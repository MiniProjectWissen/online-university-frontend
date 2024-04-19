import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  studentsByCourse:Student[];
  studentMarks=new Map<number,number>();

  constructor(private cs:CourseService,private ss:StudentService,private ts:TeacherService) {
    this.studentsByCourse=[];
   }

  ngOnInit(): void {
    this.getAllStudentsForCourse();
  }



  getAllStudentsForCourse(){
    let courseId = this.cs.courseIdSelectedByTeacher;
    this.ss.getAllStudentsByCourse(courseId).subscribe((res)=>{
      this.studentsByCourse = res as Student[];
      console.log("students by course taken")
    })

  }

  updateMapEntries(stud_id:number,marks:string)
  {
    this.studentMarks.set(stud_id,parseInt(marks,10));

    for (let [key, value] of this.studentMarks) {
      console.log(`Key: ${key}, Value: ${value}`);
  }
  }

  submitMarks()
  {
    let testId=this.ts.testIdselectedByTeacher;
    for(let [studId,marks] of this.studentMarks)
      {
        this.ts.updateStudentMarks(studId,testId,marks).subscribe({
          "error":(error:any)=>{
         
            console.log('An error occurred while adding a student:', error);
        },
        "complete": ()=>{
            console.log("marks submited")
        }
        })
      }
  }

}
