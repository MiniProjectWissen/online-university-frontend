import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { StudentCourse } from '../model/student-course.model';
import { Teacher } from '../model/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  selectedCourse:Course;
  enrolledCourses:Course[];
  allCourse:Course[];
  selectedTeacherCourse:Course;
  courseIdSelectedByTeacher:number;
  courseIdSelectedByStudent:number;
  teacher:Teacher;

  url:string ="http://localhost:8090";

  constructor(private http: HttpClient) { 
    this.selectedCourse=new Course();
    this.enrolledCourses=[];
    this.allCourse=[];
    this.courseIdSelectedByTeacher=0;
    this.courseIdSelectedByStudent=0;
    this.selectedTeacherCourse=new Course();
    this.teacher=new Teacher();
  }

  setSelectedCourseByStudent(courseId:number)
  {
    this.courseIdSelectedByStudent=courseId;
  }

  setSelectedCourse(courseid:number)
  {
    this.courseIdSelectedByTeacher=courseid;

    this.getCourseById(courseid).subscribe((res)=>{
      this.selectedCourse=res as Course;
      console.log(this.selectedCourse+" selected Course id set")

      console.log(this.selectedCourse.teacher_id)
    
    this.getTeacherById(this.selectedCourse.teacher_id).subscribe((res)=>{
      this.teacher=res as Teacher;
      console.log("Teacher set successfully"+this.teacher.first_name)
    })
    
    });

  }

  getTeacherById(teacher_id:number)
  {
    return this.http.get(this.url+"/teacher/get/id/"+teacher_id)
  }

  getAllCourses()
  {
    return this.http.get(this.url+"/course/get/all");
  }

  getAllEnrolledCourses(stud_id:number)
  {
    return this.http.get(this.url+"/student/get/enrollCourses/"+stud_id);
  }

  getCourseAttendance(stud_id:number,course_id:number)
  {
    return this.http.get(this.url+"/student/courseAttendence/"+stud_id+"/"+course_id);
  }

  getCourseById(courseId:number)
  {
    return this.http.get(this.url+"/course/get/"+courseId);
  }

  addCourse(course: Course): Observable<any> {
    // Send a request to your backend API to add a new student
    return this.http.post<any>('http://localhost:8090/course/add', course)
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
  
  incrementLectureCnt(courseId:number)
  {
    return this.http.put(this.url+"/course/incrementLectureCount/"+courseId,Course);
  }

   getAllCoursesByTeacher(teacherId:number): Observable<Course[]> {
    // Send a request to your backend API to fetch all students
    return this.http.get<Course[]>(`http://localhost:8090/course/getCoursesByTeacher/${teacherId}`)
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
    return this.http.post<any>('http://localhost:8090/student/enrollCourse', StudentCourse)
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
