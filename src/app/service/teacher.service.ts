import { Injectable } from '@angular/core';
import { Teacher } from '../model/teacher.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Test } from '../model/test.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacher: Teacher = new Teacher();
  testIdselectedByTeacher:number;

  url:String="http://localhost:8090";

  constructor(private http: HttpClient,private router:Router) { 
    this.testIdselectedByTeacher=0;
  }

  setTestIdSelectedByTeacher(testId:number)
  {
    this.testIdselectedByTeacher=testId;
  }

  getTeacherByEmail(email:String | null = null): Observable<Teacher> {
    // Send a request to your backend API to fetch a student by ID
    return this.http.get<Teacher>(`http://localhost:8090/teacher/get/email/${email}`)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while fetching a student by ID:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  updateTeacher(teacherId: number, teacher:Teacher): Observable<any> {
    // Send a request to your backend API to update a student by ID
    return  this.http.put<any>(`http://localhost:8090/teacher/update/${teacherId}`, teacher)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while updating a student:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  createTest(test:Test)
  {
    return this.http.post(this.url+"/test/add",test);
  }

  updateStudentAttendance(stud_id:number,course_id:number): Observable<any> {
    // Send a request to your backend API to update a student by ID
    return  this.http.put<any>(`http://localhost:8090/teacher/incrementAttendence/${stud_id}/${course_id}`,{})
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while updating a student:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  getTestsByCours(courseId:number)
  {
    return this.http.get(this.url+"/test/get/alltests/"+courseId);
  }

  updateStudentMarks(stud_id:number,test_id:number,marks:number){
    //return this.http.put(this.url+"/teacher/updateMarks/"+stud_id+"/"+test_id+"/"+marks);

    return  this.http.put<any>(`http://localhost:8090/teacher/updateMarks/${stud_id}/${test_id}/${marks}`,{})
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while updating a student:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }


}
