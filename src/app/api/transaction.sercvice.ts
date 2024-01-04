import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionData: any;

  setTransactionData(data: any) {
    this.transactionData = data;
  }

  getTransactionData() {
    return this.transactionData;
  }
}
