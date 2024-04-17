import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/test.model';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-upcoming-test',
  templateUrl: './upcoming-test.component.html',
  styleUrls: ['./upcoming-test.component.css']
})
export class UpcomingTestComponent implements OnInit {

  testList: Test[];
  finalTestList:Test[];
  currentDate:Date;

  constructor(public ss:StudentService,private cs:CourseService) { 
    this.testList=[];
    this.finalTestList=[];
    this.currentDate=new Date();
  }

  ngOnInit(): void {
    this.getTestList();
  }

  getTestList(){
    console.log("start")
    console.log(this.cs.courseIdSelectedByStudent)
    console.log(this.ss.student.stud_id)
    this.ss.getTestsByStudId(this.ss.student.stud_id).subscribe((res)=>{
      this.testList=res as Test[];
      console.log("successfully retrived tests")
      console.log(this.testList)

      for(let t of this.testList){
        if (t.course_id==this.cs.courseIdSelectedByStudent )
          {
            this.finalTestList.push(t);
          }
      }

      console.log("Final Test list by course :- "+this.finalTestList)
      
    }
  )
  }

}
