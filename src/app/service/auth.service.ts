import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { Observable, of,tap ,catchError,throwError} from 'rxjs';
import { User } from '../model/user.model';
import { StudentService } from './student.service';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { TeacherService } from './teacher.service';
import { Teacher } from '../model/teacher.model';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false; 
  currentUser: User | null = null; 
  studentSubscription: Subscription;
  teacherSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private router: Router ,
    private studentService:StudentService,
    private teacherService:TeacherService
  ) { 
    this.studentSubscription = new Subscription()
    this.teacherSubscription = new Subscription()

  }

  login(userData: User): Observable<any> {
    return this.http.post('http://localhost:8090/auth', userData)
      .pipe(
        catchError((error) => {
          // Handle error here, such as displaying a toast message or logging the error
          console.error('An error occurred:', error);
          
          // Rethrow the error to propagate it to the component that subscribed to this Observable
          return throwError(()=> new Error(error.error));
        }),
        tap((response: any) => {
          // Set user data and authentication state upon successful login
          this.currentUser = response.user; // Assuming the user data is returned in the 'user' property of the response
          this.isAuthenticated = true;

          console.log("authentication...")
          // Optionally, store user-related information in local storage or session storage
          //localStorage.setItem('accessToken', response.accessToken); // Example: Storing access token in local storage
          localStorage.setItem('userId', JSON.stringify(userData.email)); // Example: Storing user details in session storage
          localStorage.setItem('role', JSON.stringify(userData.role));

          
          
          localStorage.setItem('isAuthenticated',JSON.stringify(true));
          this.router.navigate(['home']);

      
          if(userData.role=="Student"){
            this.studentSubscription = this.studentService.getStudentByEmail(userData.email).subscribe(
              (student: Student) => {
                this.studentService.student = student;
                console.log('Received student data:', student);
              }
             
              )
          }
          else{
            this.teacherSubscription = this.teacherService.getTeacherByEmail(userData.email).subscribe(
              (teacher:Teacher) =>{
                this.teacherService.teacher = teacher;
                console.log("Received teacher data:  ",teacher)
              }
            )
          }
      }
          
        )
      );
  }

  logout(): Observable<any> {
    this.isAuthenticated = false;
    this.currentUser = null;

    localStorage.setItem('isAuthenticated',JSON.stringify(false));
    localStorage.setItem('userId', JSON.stringify(null)); // Example: Storing user details in session storage
    localStorage.setItem('role', JSON.stringify(null));
    this.router.navigate(['/login']);

    
    return of({ success: true });
  }
}