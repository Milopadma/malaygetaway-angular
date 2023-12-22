import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserMerchant } from '../types';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  // API methods live here
  // login related APIs
  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/login`, {
      username,
      password,
    });
  }

  // merchant related APIs
  public getMerchants(): Observable<UserMerchant[]> {
    return this.http.get<UserMerchant[]>(`${this.apiUrl}/api/merchants`);
  }

  public setMerchant(merchant: UserMerchant): Observable<UserMerchant> {
    return this.http.post<UserMerchant>(
      `${this.apiUrl}/api/merchants`,
      merchant
    );
  }

  public getMerchant(id: string): Observable<UserMerchant> {
    return this.http.get<UserMerchant>(`${this.apiUrl}/api/merchants/${id}`);
  }

  // send files
  public sendFiles(files: FileList): Observable<string[]> {
    console.log('Sending files to backend...', files);
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    return this.http.post<string[]>(
      `${this.apiUrl}/api/files/upload/multiple`,
      formData
    );
  }

  // personal details related APIs
  public createPersonalDetail(personalDetail: any): Observable<any> {
    console.log(personalDetail);
    return this.http
      .post(`${this.apiUrl}/api/purchase/personalDetail/create`, personalDetail)
      .pipe();
  }
}
