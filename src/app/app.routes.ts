import { Routes } from '@angular/router';
import { landing } from './landing.component';
import { MerchantRegister } from './merchantRegister.component';
import { purchase1 } from './purchase.component';
import { purchase2 } from './purchase2.componen';
import { purchase3 } from './purchase3.component';
import { purchase4 } from './purchase4.component';
import { purchase5 } from './purchase5.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        path: '',
        component: landing,
    },
    {
        path: 'merchant/register',
        component: MerchantRegister,
    },
    {
        path: 'review',
        component: landing,
    },
    {
        path: 'manage',
        component: landing,
    },
    // epic 4
    {
        path: 'purchase1',
        component: purchase1,
    },
    {
        path: 'purchase2',
        component: purchase2,
    },
    {
        path: 'purchase3',
        component: purchase3,
    }
    ,
    {
        path: 'purchase4',
        component: purchase4,
    }
    ,
    {
        path: 'purchase5',
        component: purchase5,
    }
];