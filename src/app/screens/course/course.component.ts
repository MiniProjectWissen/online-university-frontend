import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  scheduled_days=[];

  constructor(public es:CourseService) { }

  ngOnInit(): void {
  }

  findScheduleDays()
  {
    
  }

}
