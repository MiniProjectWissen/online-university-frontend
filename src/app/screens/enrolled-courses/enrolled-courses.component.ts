import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  constructor(public es:CourseService) { }

  ngOnInit(): void {
  }

}
