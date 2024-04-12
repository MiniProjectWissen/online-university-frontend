import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  

  constructor(public es:CourseService,public ss:StudentService) { 
    
  }

  ngOnInit(): void {
    this.refereshAllCourses();
    this.getEnrolledCourses();
  }

  refereshAllCourses()
  {
    this.es.getAllCourses().subscribe((res)=>{
      this.es.allCourse=res as Course[];
      console.log(this.es.allCourse)
    })
  }

  getEnrolledCourses()
  {
    this.es.getAllEnrolledCourses(this.ss.student.stud_id).subscribe((res)=>{
      this.es.enrolledCourses=res as Course[];
      console.log(this.es.enrolledCourses)
    })
  }

}
