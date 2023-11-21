import { Routes } from '@angular/router';
import { landing } from './landing.component';
import { MerchantRegister } from './merchantRegister.component';

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
    {
        path: 'purchase',
        component: landing,
    },
    {
        path: 'orders',
        component: landing,
    },
    {
        path: 'analytics',
        component: landing,
    }
];
