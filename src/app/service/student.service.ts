import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Student } from '../model/student.model';
import { StudentTest } from '../model/student-test.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student:Student=new Student();

  url:String="http://localhost:8090";

  constructor(private http: HttpClient,private router:Router) {
    
   }

  addStudent(student: Student): Observable<any> {

    return this.http.post<any>('http://localhost:8090/student/add', student)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.log('An error occurred while adding a student:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error.error));
        }),tap((response:any)=>{
          this.router.navigate(['login']);
        })
      );
  }

  // removeStudent(studentId: number): Observable<any> {
  //   // Send a request to your backend API to remove a student by ID
  //   return this.http.delete<any>(`http://localhost:8080/student/delete/${studentId}`)
  //     .pipe(
  //       catchError((error) => {
  //         // Handle error here, such as displaying a toast message or logging the error
  //         console.error('An error occurred while removing a student:', error);
  //         // Rethrow the error to propagate it to the component that subscribed to this Observable
  //         return throwError(()=> new Error(error));
  //       })
  //     );
  // }

  updateStudent(studentId: number, student: Student): Observable<any> {
    // Send a request to your backend API to update a student by ID
    return  this.http.put<any>(`http://localhost:8090/student/update/${studentId}`, student)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while updating a student:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  // getStudentById(studentId: number): Observable<User> {
  //   // Send a request to your backend API to fetch a student by ID
  //   return this.http.get<User>(`http://localhost:8080/student/get/${studentId}`)
  //     .pipe(
  //       catchError((error) => {
  //         // Handle error here, such as displaying a toast message or logging the error
  //         console.error('An error occurred while fetching a student by ID:', error);
  //         // Rethrow the error to propagate it to the component that subscribed to this Observable
  //         return throwError(()=> new Error(error));
  //       })
  //     );
  // }
  getStudentByEmail(email:String | null = null): Observable<Student> {
    // Send a request to your backend API to fetch a student by ID
    return this.http.get<Student>(`http://localhost:8090/student/getEmail/${email}`)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while fetching a student by ID:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  // getAllStudents(): Observable<User[]> {
  //   // Send a request to your backend API to fetch all students
  //   return this.http.get<User[]>('http://localhost:8080/student/get/all')
  //     .pipe(
  //       catchError((error) => {
  //         // Handle error here, such as displaying a toast message or logging the error
  //         console.error('An error occurred while fetching all students:', error);
  //         // Rethrow the error to propagate it to the component that subscribed to this Observable
  //         return throwError(()=> new Error(error));
  //       })
  //     );
  // }

  // Implement other methods for fetching all students, searching students by criteria, etc.

  addStudentTest(st:StudentTest)
  {
    return this.http.post(this.url+"/student/addTest",st)
  }

  getAllStudentsByCourse(courseId:number): Observable<Student[]> {
    // Send a request to your backend API to fetch all students
    return this.http.get<Student[]>(`http://localhost:8090/student/getStudentsByCourse/${courseId}`)
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