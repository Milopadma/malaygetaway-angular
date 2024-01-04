import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiBaseUrl = 'http://localhost:8080/api/review/formReview';

  constructor(private http: HttpClient) {}

  createReview(send: any): Observable<any> {
    console.log('Sending review:', send);
    return this.http.post(`${this.apiBaseUrl}/create`, send).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error?.message || error.statusText;
    console.error('Server error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
