import { Component, OnInit } from '@angular/core';
import { StudentTest } from 'src/app/model/student-test.model';
import { Test } from 'src/app/model/test.model';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  studentTest:StudentTest;
  test:Test;

  constructor(private ts:TeacherService,private cs:CourseService,private ss:StudentService) { 
    this.test=new Test();
    this.studentTest=new StudentTest();

  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("start")
    this.test.course_id=this.cs.courseIdSelectedByTeacher;
    console.log(this.test.course_id+" "+this.test.start_time+" "+this.test.test_id)
    this.ts.createTest(this.test).subscribe((res)=>{
      console.log("Test added successfully")  

      this.studentTest.id.stud_id=1;//this.ss.student.stud_id;
    this.studentTest.id.test_id=2;//this.test.test_id;
    this.studentTest.marks=0;

    console.log("Student Test map "+this.studentTest.id.stud_id+" "+this.studentTest.id.test_id)

    this.ss.addStudentTest(this.studentTest).subscribe((res)=>{
      console.log("Student test added ")
    })

    });
  }
}
