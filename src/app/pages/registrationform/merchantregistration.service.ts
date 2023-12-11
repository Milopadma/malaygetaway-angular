import { Injectable, NgModule } from '@angular/core';
import { Merchant } from '../../types/merchant';
import { Business } from '../../types/business';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Handles the global state for the Merchant Registration Form flow data state
@Injectable({ providedIn: 'root' })
export class MerchantRegistrationService {
  // init empty merchant object
  merchant: Merchant = new Merchant(0, '', '', 0, '');
  business: Business = new Business(0, '', '', '', '', '');

  constructor(private http: HttpClient) {}
  // get merchant data
  getMerchant(): Merchant {
    return this.merchant;
  }
  // set merchant data
  setMerchant(merchant: Merchant) {
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
    return this.http.post(
      'http://localhost:3000/merchant/register',
      {
        merchant: JSON.stringify(this.merchant),
        business: JSON.stringify(this.business),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  // send files
  sendFiles(files: FileList) {
    console.log('Sending files to backend...', files);
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    return this.http.post('http://localhost:3000/sendFiles', formData);
  }
}

@NgModule({
  imports: [
    HttpClientModule,
    // other imports here
  ],
  // other metadata here
})
export class AppModule {}
