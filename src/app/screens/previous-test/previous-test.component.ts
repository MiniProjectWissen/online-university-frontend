import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/test.model';
import { StudentService } from 'src/app/service/student.service';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-previous-test',
  templateUrl: './previous-test.component.html',
  styleUrls: ['./previous-test.component.css']
})
export class PreviousTestComponent implements OnInit {

  testList: Test[];
  finalTestList:Test[];
  currentDate:Date;
  marks:number;


  constructor(public ss:StudentService,private cs:CourseService) { 
    this.testList=[];
    this.finalTestList=[];
    this.currentDate=new Date();
    this.marks=0;
  }

  ngOnInit(): void {
    this.getTestList();
  }

  getMarks(testId:number){
    this.ss.getMarksByStudIdTestId(this.ss.student.stud_id,testId).subscribe((res)=>{
      this.marks=res as number;

      console.log("Marks obbtained"+this.marks)
      alert("Marks :- "+this.marks)
    })
  }
  
  getTestList(){
    this.ss.getTestsByStudId(this.ss.student.stud_id).subscribe((res)=>{
      this.testList=res as Test[];
      console.log("successfully retrived tests")
      console.log(this.testList)

      for(let t of this.testList){
        if (t.course_id==this.cs.courseIdSelectedByStudent)
          {
            console.log("euu")
            this.finalTestList.push(t);
          }
      }

      console.log("Final Test list by course :- "+this.finalTestList)
      
    }
  )
  }

}
