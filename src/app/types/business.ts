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
