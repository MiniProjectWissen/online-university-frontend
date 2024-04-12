import { Injectable } from '@angular/core';
import { Teacher } from '../model/teacher.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacher: Teacher = new Teacher()

  constructor(private http: HttpClient,private router:Router) { }

  getTeacherByEmail(email:String | null = null): Observable<Teacher> {
    // Send a request to your backend API to fetch a student by ID
    return this.http.get<Teacher>(`http://localhost:8081/teacher/get/email/${email}`)
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
    return  this.http.put<any>(`http://localhost:8081/teacher/update/${teacherId}`, teacher)
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
