import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/course.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  myCourseSubscription: Subscription
  myCourseList : Course[];

  constructor(public es:CourseService,public ts:TeacherService) {
    this.myCourseSubscription = new Subscription();
    this.myCourseList = [];
   }

  ngOnInit(): void {
    this.loadTeacherCourses();
  }

  loadTeacherCourses(){
    let teacherId = this.ts.teacher.teacher_id;
    console.log(teacherId)
    this.myCourseSubscription = this.es.getAllCoursesByTeacher(teacherId).subscribe(
      (courses:Course[])=>{
        this.myCourseList = courses;
        console.log("Recieved course list by teacher "+courses)
      }
    )

  }
}
