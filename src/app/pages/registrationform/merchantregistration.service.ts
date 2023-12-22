import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Business,
  MerchantData,
  MerchantStatus,
  UserMerchant,
} from '../../types';
import { ApiService } from '../../api/api.service';

// Handles the global state for the Merchant Registration Form flow data state
@Injectable({ providedIn: 'root' })
export class MerchantRegistrationService {
  // init empty merchant object
  merchant: UserMerchant = new UserMerchant(0, '', '', {
    merchantId: 0,
    phoneNumber: 0,
    email: '',
    status: MerchantStatus.PENDING,
  } as MerchantData);
  business: Business = new Business(0, 0, '', '', '', '', '', []);

  constructor(private http: HttpClient, private apiService: ApiService) {}
  // get merchant data
  getMerchant(): UserMerchant {
    return this.merchant;
  }
  // set merchant data
  setMerchant(merchant: UserMerchant) {
    console.log(merchant);
    this.merchant = merchant;
  }
  // get business data
  getBusiness(): Business {
    return this.business;
  }
  // set business data
  setBusiness(business: Business) {
    console.log(business);
    this.business = business;
  }

  // send the data to backend
  sendData() {
    console.log('Sending data to backend...', this.merchant, this.business);
    return this.apiService.setMerchant(this.merchant);
  }
}
