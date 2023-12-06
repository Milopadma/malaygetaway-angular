import { Merchant } from './merchant';

export class Business {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public address: string,
    public contactNumber: string,
    public contactEmail: string,
    public merchant: Merchant
  ) {}
}
