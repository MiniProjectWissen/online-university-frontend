import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private authService:AuthService,private router:Router) { }

  addStudent(student: Student): Observable<any> {
    // Send a request to your backend API to add a new student
    return this.http.post<any>('http://localhost:8081/student/add', student)
      .pipe(
        
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.log('An error occurred while adding a student:', error.error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error.error));
        }),tap((response:any)=>{
          // Set user data and authentication state upon successful login
          this.authService.currentUser = response.user; // Assuming the user data is returned in the 'user' property of the response
          this.authService.isAuthenticated = true;

          // Optionally, store user-related information in local storage or session storage
          //localStorage.setItem('accessToken', response.accessToken); // Example: Storing access token in local storage
          localStorage.setItem('userId', JSON.stringify(student.email)); // Example: Storing user details in session storage
          localStorage.setItem('role', JSON.stringify("Student"));
          localStorage.setItem('isAuthenticated',JSON.stringify(true));
          this.router.navigate(['']);
        })
      );
  }

  removeStudent(studentId: number): Observable<any> {
    // Send a request to your backend API to remove a student by ID
    return this.http.delete<any>(`http://localhost:8080/student/delete/${studentId}`)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while removing a student:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  updateStudent(studentId: number, student: User): Observable<any> {
    // Send a request to your backend API to update a student by ID
    return this.http.put<any>(`http://localhost:8080/student/update/${studentId}`, student)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while updating a student:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  getStudentById(studentId: number): Observable<User> {
    // Send a request to your backend API to fetch a student by ID
    return this.http.get<User>(`http://localhost:8080/student/get/${studentId}`)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while fetching a student by ID:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  getAllStudents(): Observable<User[]> {
    // Send a request to your backend API to fetch all students
    return this.http.get<User[]>('http://localhost:8080/student/get/all')
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred while fetching all students:', error);
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error));
        })
      );
  }

  // Implement other methods for fetching all students, searching students by criteria, etc.

}
