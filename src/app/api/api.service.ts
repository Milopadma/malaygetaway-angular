import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dotenv from 'dotenv';

dotenv.config();

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl =
      process.env['ENVIRONMENT'] === 'production'
        ? 'https://api.example.com'
        : 'http://localhost:3000';
  }

  // API methods live here
  getMerchants() {
    return this.http.get(`${this.apiUrl}/api/merchants`);
  }

  setMerchant(merchant: MerchantData) {
    return this.http.post(`${this.apiUrl}/api/merchants`, merchants);
  }

  getMerchant(id: string) {
    return this.http.get(`${this.apiUrl}/api/merchants/${id}`);
  }


}
