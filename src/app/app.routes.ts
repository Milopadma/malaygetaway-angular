import { Routes } from '@angular/router';
import { landing } from './landing.component';
import { MerchantRegister } from './pages/merchantRegister.component';
import { BusinessNameFormComponent } from './pages/registrationform/businessname.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';

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
                path: 'name',
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
    },
    // 404
    {
        path: '**',
        component: NotFoundComponent,
    },

];
