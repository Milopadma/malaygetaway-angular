import { Routes } from '@angular/router';
import { landing } from './landing.component';
import { MerchantRegister } from './pages/merchantRegister.component';
import { BusinessNameFormComponent } from './pages/registrationform/businessname.component';

export const routes: Routes = [
    {
        path: '',
        component: landing,
    },
    {
        path: 'merchant/register',
        component: MerchantRegister,
        children: [
            {
                path: 'businessname',
                component: BusinessNameFormComponent,
            },
            {
                path: 'details',
                component: landing,
            },
            {
                path: 'documents',
                component: landing,
            },
            {
                path: 'done',
                component: landing,
            },
        ],
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
