import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedProductPrice: number= 0;

  constructor() {}

  setSelectedProductPrice(price: number) {
    this.selectedProductPrice = price;
  }

  getSelectedProductPrice(): number {
    return this.selectedProductPrice;
  }
}
