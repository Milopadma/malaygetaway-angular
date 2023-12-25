export interface FormError {
  message: string | null;
  isHidden: boolean;
}

export interface MerchantDataResponse {
  status: string;
  code: number;
  data: MerchantData[];
  message: string;
}

export interface FileUploadResponse {
  status: string;
  code: number;
  data: {
    data: {
      key: string;
      url: string;
      name: string;
      size: number;
    };
    error: any;
  }[];
  message: string;
}

// UserType
export enum UserType {
  EMPTY = 'empty',
  MERCHANT = 'merchant',
  CUSTOMER = 'customer',
  MINISTRY_OFFICER = 'ministry_officer',
}

// login types
export interface User<UserTypeData> {
  userId: number;
  username: string;
  password: string;
  data: UserTypeData;
}

// user types and their data
export type UserTypeData =
  | { type: UserType.MERCHANT; data: MerchantData }
  | { type: UserType.CUSTOMER; data: CustomerData }
  | { type: UserType.MINISTRY_OFFICER; data: MinistryOfficerData };

// merchant related interface types
export enum MerchantStatus {
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  PENDING = 'pending',
}

export interface MerchantData {
  merchantId: number;
  name: string;
  contactNumber: number;
  contactEmail: string;
  description: string;
  businessFileURLs: string[];
  status: MerchantStatus;
  products: Product[];
}

export interface Product {
  productId: number;
  name: string;
  description: string;
  price: number | undefined;
  type: string;
  productImageURLs: string[];
  merchantId: number;
}

// Customer related interface types
export interface CustomerData {
  customerId: number;
}

// Ministry Officer related interface types
export interface MinistryOfficerData {
  officerId: number;
}

export class MerchantData {
  constructor(
    public merchantId: number,
    public name: string,
    public contactNumber: number,
    public contactEmail: string,
    public description: string,
    public businessFileURLs: string[],
    public status: MerchantStatus
  ) {}

  [key: string]: any;
}

export class UserMerchant {
  constructor(
    public userId: number,
    public username: string,
    public password: string,
    public data: MerchantData
  ) {}

  [key: string]: any;
}

export class UserCustomer {
  constructor(
    public userId: number,
    public username: string,
    public password: string,
    public data: CustomerData
  ) {}

  [key: string]: any;
}

export class UserMinistryOfficer {
  constructor(
    public userId: number,
    public username: string,
    public password: string,
    public data: MinistryOfficerData
  ) {}

  [key: string]: any;
}
