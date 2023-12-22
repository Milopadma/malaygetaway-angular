import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailService {
  private apiBaseUrl = 'http://localhost:3003/api/purchase/personalDetail';

  constructor(private http: HttpClient) {}

  createPersonalDetail(personalDetail: any): Observable<any> {
    console.log(personalDetail);
    return this.http.post(`${this.apiBaseUrl}/create`, personalDetail).pipe(
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Error handling sesuai kebutuhan
    return throwError('An error occurred');
  }
}