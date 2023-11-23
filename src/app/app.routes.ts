import { Routes } from '@angular/router';
import { landing } from './pages/registrationform/landing.component';
import { MerchantRegister } from './pages/merchantRegister.component';
import { BusinessNameFormComponent } from './pages/registrationform/businessname.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { BusinessDetailsFormComponent } from './pages/registrationform/businessdetails.component';

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
                component: BusinessDetailsFormComponent,
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
