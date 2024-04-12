import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  

  constructor(public es:CourseService) { 
    
  }

  ngOnInit(): void {
    this.refereshCourses();
  }

  refereshCourses()
  {
    this.es.getAllCourses().subscribe((res)=>{
      this.es.allCourse=res as Course[];
      console.log(this.es.allCourse)
    })
  }


}
