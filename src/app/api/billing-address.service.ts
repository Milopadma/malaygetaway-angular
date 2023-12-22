import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillingAddressService {
  private apiBaseUrl = 'http://localhost:8080/api/purchase/billingAddress';

  constructor(private http: HttpClient) {}

  createBillingAddress(billingAddress: any): Observable<any> {
    console.log(billingAddress);
    return this.http.post(`${this.apiBaseUrl}/create`, billingAddress).pipe(
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Error handling sesuai kebutuhan
    return throwError('An error occurred');
  }
}