import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MerchantData, MerchantStatus, UserMerchant } from '../../types';
import { ApiService } from '../../api/api.service';

// Handles the global state for the Merchant Registration Form flow data state
@Injectable({ providedIn: 'root' })
export class MerchantRegistrationService {
  // init empty merchant object
  merchant: MerchantData = new MerchantData(
    0,
    '',
    0,
    '',
    '',
    [],
    MerchantStatus.PENDING
  );

  constructor(private http: HttpClient, private apiService: ApiService) {}

  // get merchant data
  getMerchant(): MerchantData {
    return this.merchant;
  }
  // set merchant data
  setMerchant(merchant: MerchantData) {
    console.log(merchant);
    this.merchant = merchant;
  }

  // send the data to backend
  registerMerchant() {
    console.log('Sending data to backend...', this.merchant);
    return this.apiService.registerMerchant(this.merchant).subscribe(
      (response) => {
        console.log('Response from backend', response);
      },
      (error) => {
        console.log('Error from backend', error);
      }
    );
  }

  // checks
  checkUsername(
    username: string
  ): Observable<{ code: number; message: string }> {
    return this.apiService.checkMerchantName(username);
  }

  checkEmail(email: string): boolean {
    this.apiService.checkMerchantEmail(email).subscribe(
      (response) => {
        console.log('Response from backend', response);
        return response;
      },
      (error) => {
        console.log('Error from backend', error);
        return false;
      }
    );
    return false;
  }
  checkNumber(number: number): boolean {
    this.apiService.checkMerchantContactNumber(number).subscribe(
      (response) => {
        console.log('Response from backend', response);
        return response;
      },
      (error) => {
        console.log('Error from backend', error);
        return false;
      }
    );
    return false;
  }
}
