import { Injectable } from "@angular/core";
import { Merchant } from "../../types/merchant";

// Handles the global state for the Merchant Registration Form flow data state
@Injectable({providedIn: 'root'})
export class MerchantRegistrationService {
    // init empty merchant object
    merchant: Merchant = new Merchant(0, '', '', 0, '');
    constructor() {}
    // get merchant data
    getMerchant(): Merchant {
        return this.merchant;
    }
    // set merchant data
    setMerchant(merchant: Merchant) {
        this.merchant = merchant;
    }
}