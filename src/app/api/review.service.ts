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

  createReview(review: any): Observable<any> {
    console.log(review);
    return this.http.post(`${this.apiBaseUrl}/create`, review).pipe(
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Error handling sesuai kebutuhan
    return throwError('An error occurred');
  }
}