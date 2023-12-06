import { Business } from './business';

export class Merchant {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public phoneNumber: string,
    public email: string,
    public business?: Business
  ) {}
}
