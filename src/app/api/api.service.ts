import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FileUploadResponse,
  MerchantData,
  MerchantDataResponse,
  MerchantStatus,
  Product,
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

  public changePassword(
    userId: number,
    newPassword: string,
    oldPassword: string
  ): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/api/auth/changePassword`, {
        userId: userId,
        oldPassword: oldPassword,
        newPassword: newPassword,
      })
      .pipe();
  }

  public getUserByEmail(email: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/api/auth/getUserByEmail/${email}`, {})
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

  public getMerchantId(username: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/api/auth/getMerchantId/${username}`, {})
      .pipe();
  }

  public checkUsernameAvailability(username: string): Observable<any> {
    console.log('Checking username availability...');
    return this.http
      .get<any>(`${this.apiUrl}/api/auth/check/username/${username}`, {})
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

  public updateMerchant(
    merchantId: number,
    merchant: MerchantData
  ): Observable<any> {
    console.log(merchant);
    return this.http
      .patch(
        `${this.apiUrl}/api/merchant/update/${merchantId}`,
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

  public setStatus(merhantId: number, status: MerchantStatus): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/api/merchant/setStatus/${merhantId}`, {
        status,
      })
      .pipe();
  }

  public getMerchant(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/merchant/get/${id}`).pipe();
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

  // products related APIs
  // these ones refer to customer view
  public getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/customer/getProducts`).pipe();
  }

  // these ones refer to merchant view
  public getProducts(merchantId: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/api/merchant/getProducts/${merchantId}`)
      .pipe();
  }

  public getSingleProduct(productId: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/api/merchant/getSingleProduct/${productId}`)
      .pipe();
  }

  public addProduct(product: Product): Observable<any> {
    console.log(product);
    return this.http
      .post(`${this.apiUrl}/api/merchant/addProduct`, {
        product: product,
      })
      .pipe();
  }

  public updateProduct(product: Product): Observable<any> {
    console.log(product);
    return this.http
      .patch(
        `${this.apiUrl}/api/merchant/updateProduct/${product.productId}`,
        {
          product: product,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe();
  }

  public deleteProduct(productId: number): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/api/merchant/deleteProduct/${productId}`)
      .pipe();
  }

  // personal details related APIs
  public createPersonalDetail(personalDetail: any): Observable<any> {
    console.log(personalDetail);
    return this.http
      .post(`${this.apiUrl}/api/purchase/personalDetail/create`, personalDetail)
      .pipe();
  }
}
