import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FileUploadResponse,
  MerchantData,
  MerchantDataResponse,
  UserMerchant,
  UserType,
} from '../types';
import { EMPTY, Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  // API methods live here
  // test APIS
  public testAPI(): Observable<any> {
    console.log('APIURL', this.apiUrl);
    return this.http.get<any>(`${this.apiUrl}/api/hello`).pipe();
  }

  // login related APIs
  public login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/api/auth/login`, {
        username,
        password,
      })
      .pipe();
  }

  public getUserType(username: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/api/auth/userType`, {
        params: {
          username,
        },
      })
      .pipe();
  }

  public isOfficer(): boolean {
    // Get the role from localStorage
    // const role = localStorage.getItem('userType');

    // Check if the role is 'officer'
    // return role === 'officer';
    // todo! proper implementation of this, needs to be Sessions
    return true;
  }

  // merchant related APIs
  public registerMerchant(merchant: MerchantData): Observable<any> {
    console.log(merchant);
    return this.http
      .post(
        `${this.apiUrl}/api/merchant/register`,
        {
          merchant: merchant,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe();
  }

  public getMerchants(): Observable<MerchantDataResponse> {
    return this.http
      .get<MerchantDataResponse>(`${this.apiUrl}/api/merchant/get`)
      .pipe();
  }

  public setMerchant(merchant: UserMerchant): Observable<UserMerchant> {
    return this.http
      .post<UserMerchant>(`${this.apiUrl}/api/merchants`, merchant)
      .pipe();
  }

  public getMerchant(id: string): Observable<UserMerchant> {
    return this.http
      .get<UserMerchant>(`${this.apiUrl}/api/merchants/${id}`)
      .pipe();
  }

  // individual fields checks
  public checkMerchantName(
    name: string
  ): Observable<{ code: number; message: string }> {
    if (!name) {
      return EMPTY;
    }
    return this.http
      .get<any>(`${this.apiUrl}/api/merchant/check/name/${name}`, {})
      .pipe(
        map((response) => {
          if (response.status === 'Conflict') {
            return { code: 409, message: 'Username already exists' };
          }
          return { code: 200, message: 'Username is available' };
        }),
        catchError((error) => {
          console.error(error);
          return of({ code: 500, message: 'Internal server error' });
        })
      );
  }

  public checkMerchantEmail(
    email: string
  ): Observable<{ code: number; message: string }> {
    if (!email) {
      return EMPTY;
    }
    return this.http
      .get<any>(`${this.apiUrl}/api/merchant/check/email/${email}`, {})
      .pipe(
        map((response) => {
          if (response.status === 'Conflict') {
            return { code: 409, message: 'Email already exists' };
          }
          return { code: 200, message: 'Email is available' };
        }),
        catchError((error) => {
          console.error(error);
          return of({ code: 500, message: 'Internal server error' });
        })
      );
  }

  public checkMerchantContactNumber(
    contactNumber: number
  ): Observable<{ code: number; message: string }> {
    if (!contactNumber) {
      return EMPTY;
    }
    return this.http
      .get<any>(
        `${this.apiUrl}/api/merchant/check/contactNumber/${contactNumber}`,
        {}
      )
      .pipe(
        map((response) => {
          if (response.status === 'Conflict') {
            return { code: 409, message: 'Contact number already exists' };
          }
          return { code: 200, message: 'Contact number is available' };
        }),
        catchError((error) => {
          console.error(error);
          return of({ code: 500, message: 'Internal server error' });
        })
      );
  }

  // send files
  public sendFiles(files: File[]): Observable<string[]> {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      console.log(formData.getAll('files'));
      formData.append('files', files[i], files[i].name);
      console.log(formData.getAll('files'));
    }
    return this.http
      .post<string[]>(
        `${this.apiUrl}/api/files/upload/multiple`,
        formData, // send formData directly
        {
          reportProgress: true, // for tracking upload progress
        }
      )
      .pipe();
  }

  uploadFile(file: File): Observable<FileUploadResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<FileUploadResponse>(
      `${this.apiUrl}/api/files/upload`,
      formData
    );
  }

  uploadMultipleFiles(files: File[]): Observable<FileUploadResponse> {
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i], files[i].name);
    }
    return this.http.post<FileUploadResponse>(
      `${this.apiUrl}/api/files/upload`,
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
