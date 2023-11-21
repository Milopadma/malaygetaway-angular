import { Routes } from '@angular/router';
import { landing } from './landing.component';
import { merchantRegister } from './merchantRegister.component';

export const routes: Routes = [
    {
        path: '',
        component: landing,
    },
    {
        path: 'merchant/register',
        component: merchantRegister,
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
