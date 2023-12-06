import { Injectable } from "@angular/core";
import { Merchant } from "../../types/merchant";
import { Business } from "../../types/business";

// Handles the global state for the Merchant Registration Form flow data state
@Injectable({providedIn: 'root'})
export class MerchantRegistrationService {
    // init empty merchant object
    merchant: Merchant = new Merchant(0, '', '', 0, '');
    business: Business = new Business(0, '', '', '', '', '');

    constructor() {}
    // get merchant data
    getMerchant(): Merchant {
        return this.merchant;
    }
    // set merchant data
    setMerchant(merchant: Merchant) {
        console.log(merchant)
        this.merchant = merchant;
    }
    // get business data
    getBusiness(): Business {
        return this.business;
    }
    // set business data
    setBusiness(business: Business) {
        console.log(business)
        this.business = business;
    }
}