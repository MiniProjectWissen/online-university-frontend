import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  scheduled_days=[];
  attendance:any;

  constructor(public es:CourseService,public ss:StudentService) { 
    this.attendance=0.0;
  }

  ngOnInit(): void {
    console.log("euu")
    this.setAttendance();
  }

  findScheduleDays()
  {
    
  }

  setAttendance()
  {
    console.log("attendance")
    //console.log(this.ss.student.stud_id+" : "+this.es.selectedCourse.course_id+" "+this.es.courseIdSelectedByTeacher);
    this.es.getCourseAttendance(this.ss.student.stud_id,this.es.courseIdSelectedByTeacher).subscribe((res)=>{
      this.attendance=res;
      console.log("course attendance got")
    });
    console.log(this.attendance);
  }


}
