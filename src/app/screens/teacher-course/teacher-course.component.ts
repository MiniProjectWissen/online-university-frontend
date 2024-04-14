import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { TeacherService } from 'src/app/service/teacher.service';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css']
})
export class TeacherCourseComponent implements OnInit {
  
  constructor(public es:CourseService,private ts:TeacherService) { 
    
  }

  ngOnInit(): void {
  }

  incrementLectureCnt()
  {
    this.es.incrementLectureCnt(this.es.courseIdSelectedByTeacher).subscribe((res)=>{
      console.log("attendance incremented success")
    })
  }


  }
