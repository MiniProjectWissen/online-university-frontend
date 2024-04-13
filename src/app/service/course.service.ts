import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  selectedCourse:Course;
  enrolledCourses:Course[];

  constructor(private http: HttpClient,private router:Router) { 
    this.selectedCourse={
      course_id:1,
      forum_id:1,
      teacher_id:1,
      title:"Angular Basic",
      description:"Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.",
      start_date:new Date("2024-09-09"),
      end_date:new Date("2024-09-09"),
      sch_days:"0000000",
      syllabus:"jjaa",
      join_time:new Date(),
      end_time:new Date(),
      lectures_taken:0
    }
    this.enrolledCourses=[
      {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
    ];
  }

   getAllCoursesByTeacher(teacherId:number): Observable<Course[]> {
    // Send a request to your backend API to fetch all students
    return this.http.get<Course[]>(`http://localhost:8081/course/getCoursesByTeacher/${teacherId}`)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while fetching all students:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }
}
