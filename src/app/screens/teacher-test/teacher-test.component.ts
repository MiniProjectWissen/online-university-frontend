import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/service/teacher.service';
import { Test } from 'src/app/model/test.model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-teacher-test',
  templateUrl: './teacher-test.component.html',
  styleUrls: ['./teacher-test.component.css']
})
export class TeacherTestComponent implements OnInit {

  testList: Test[];

  constructor(public ts:TeacherService,private cs:CourseService) { 
    this.testList=[];
  }

  ngOnInit(): void {
    this.getTestList();
  }

  getTestList(){
    console.log(this.cs.courseIdSelectedByTeacher)
    this.ts.getTestsByCours(this.cs.courseIdSelectedByTeacher).subscribe((res)=>{
      this.testList=res as Test[];
      console.log("successfully retrived tests")
      console.log(this.testList)
    }
  )
  }

}
