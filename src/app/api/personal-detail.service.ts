import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PersonalDetailService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  createPersonalDetail(personalDetail: any): Observable<any> {
    console.log(personalDetail);
    // return this.http.post(`${this.apiBaseUrl}/create`, personalDetail).pipe();
    return this.apiService.createPersonalDetail(personalDetail).pipe();
  }

  private handleError(error: HttpErrorResponse) {
    // Error handling sesuai kebutuhan
    return throwError('An error occurred');
  }
}
