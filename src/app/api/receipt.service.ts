import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private apiBaseUrl = 'http://localhost:8080/api/receipt';

  constructor(private http: HttpClient) {}

  getReceiptDetails(receiptId: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/get/${receiptId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Error handling sesuai kebutuhan
    return throwError('An error occurred');
  }
}
