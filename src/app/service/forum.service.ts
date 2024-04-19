import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseUrl = 'http://localhost:8090'; 

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<Message> {
    const url = `${this.baseUrl}/forum/send`;
    return this.http.post<Message>(url, message)
      .pipe(
        catchError(this.handleError)
      );
  }

  receiveMessages(forumId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/forum/receive/${forumId}`;
    return this.http.get<Message[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // private getHeaders() {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(()=>new Error("Somethig bad happend"));
  }
}
