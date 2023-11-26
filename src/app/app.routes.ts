import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// purchase tourism
import { purchase1 } from './purchase.component';
import { purchase2 } from './purchase2.componen';
import { purchase3 } from './purchase3.component';
import { purchase4 } from './purchase4.component';
import { purchase5 } from './purchase5.component';

// merchant registration flow
import { landing } from './pages/registrationform/landing.component';
import { MerchantRegister } from './pages/merchantRegister.component';
import { BusinessNameFormComponent } from './pages/registrationform/businessname.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { BusinessDetailsFormComponent } from './pages/registrationform/businessdetails.component';
import { BusinessFilesFormComponent } from './pages/registrationform/businessfiles.component';
import { CompletedFormComponent } from './pages/registrationform/formcomplete.component';
import { OfficerHomeComponent } from './pages/applicationReview/home.component';

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
        path: '',
        component: landing,
      },
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
        component: BusinessFilesFormComponent,
      },
      {
        path: 'complete',
        component: CompletedFormComponent,
      },
    ],
  },
  {
    path: 'officer/home',
    component: OfficerHomeComponent,
    children: [
      //   {
      //     path: 'applications',
      //     component: OfficerApplicationsComponent,
      //     children: [
      //         {
      //             path: ':id',
      //             component: OfficerMerchantApplicationComponent,
      //         },
      //         ],
      //   },
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
  },
  {
    path: 'purchase4',
    component: purchase4,
  },
  {
    path: 'purchase5',
    component: purchase5,
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
