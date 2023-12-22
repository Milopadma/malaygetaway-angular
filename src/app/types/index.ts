export interface FormError {
  message: string | null;
  isHidden: boolean;
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
  phoneNumber: number;
  email: string;
  status: MerchantStatus;
}

// Customer related interface types
export interface CustomerData {
  customerId: number;
}

// Ministry Officer related interface types
export interface MinistryOfficerData {
  officerId: number;
}

// business related interface types
export interface Business {
  merchantId: number; // as owner of the business
  businessId: number;
  name: string;
  description: string;
  address: string;
  contactNumber: string;
  contactEmail: string;
  businessFileURLs: string[];
}

export class Business {
  constructor(
    public merchantId: number,
    public businessId: number,
    public name: string,
    public description: string,
    public address: string,
    public contactNumber: string,
    public contactEmail: string,
    public businessFileURLs: string[]
  ) {}
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
