import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { StudentCourse } from '../model/student-course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  selectedCourse:Course;
  enrolledCourses:Course[];
  allCourse:Course[];

  url:string ="http://localhost:8081";

  constructor(private http: HttpClient) { 
    this.selectedCourse=new Course();
    this.enrolledCourses=[
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
    ];
    this.allCourse=[];
  }

  setSelectedCourse(courseid:number)
  {
    this.getCourseById(courseid).subscribe((res)=>{
      this.selectedCourse=res as Course;
      console.log(this.selectedCourse)
    });
  }

  getAllCourses()
  {
    return this.http.get(this.url+"/course/get/all");
  }

  getAllEnrolledCourses(stud_id:number)
  {
    return this.http.get(this.url+"/student/get/enrollCourses/"+stud_id);
  }

  getCourseById(courseId:number)
  {
    return this.http.get(this.url+"/course/get/"+courseId);
  }

  addCourse(course: Course): Observable<any> {
    // Send a request to your backend API to add a new student
    return this.http.post<any>('http://localhost:8081/course/add', course)
      .pipe(
        
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.log('An error occurred while adding a student:', error.error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error.error));
        }),tap((response:any)=>{
         
          // this.router.navigate(['login']);
        })
      );
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



  addStudentCourse(StudentCourse:StudentCourse): Observable<any> {
    // Send a request to your backend API to add a new student
    return this.http.post<any>('http://localhost:8081/student/enrollCourse', StudentCourse)
      .pipe(
        
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.log('An error occurred while adding a student:', error.error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error.error));
        }),tap((response:any)=>{
         
          // this.router.navigate(['login']);
        })
      );
  }
}
