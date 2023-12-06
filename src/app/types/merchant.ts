export class Merchant {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public phoneNumber: number,
    public email: string,
  ) {}

  [key: string]: any;

}
