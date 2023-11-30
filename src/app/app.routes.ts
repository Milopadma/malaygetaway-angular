import { Routes } from '@angular/router';

// purchase tourism
import { purchase1 } from './purchase.component';
import { purchase2 } from './purchase2.componen';
import { purchase3 } from './purchase3.component';
import { purchase4 } from './purchase4.component';
import { purchase5 } from './purchase5.component';
import { NgModule } from '@angular/core';
import { order } from './order.component';
import { reviewKL } from './reviewKL.component';
import { reviewAquaria } from './reviewAquaria.component';
import { reviewGenting } from './reviewGenting.component';
import { send } from './send.component';
import { analytic1 } from './analytic1.component';

// merchant registration flow
import { landing } from './pages/registrationform/landing.component';
import { MerchantRegister } from './pages/merchantRegister.component';
import { BusinessNameFormComponent } from './pages/registrationform/businessname.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { BusinessDetailsFormComponent } from './pages/registrationform/businessdetails.component';
import { BusinessFilesFormComponent } from './pages/registrationform/businessfiles.component';
import { CompletedFormComponent } from './pages/registrationform/formcomplete.component';
import { OfficerLayout } from './pages/applicationReview/officerlayout.component';
import { OfficerHomeComponent } from './pages/applicationReview/home.component';
import { OfficerApplicationsComponent } from './pages/applicationReview/applicationslist.component';
import { OfficerMerchantApplicationsComponent } from './pages/applicationReview/merchantapplication.component';
import { homepurchase } from './homePurchase.componment';

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
    ],
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
    path: 'reviewGenting',
    component: reviewGenting,
  },
  {
    path: 'reviewKL',
    component: reviewKL,
  },
  {
    path: 'reviewAquaria',
    component: reviewAquaria,
  },
  {
    path: 'send',
    component: send,
  },
  {
    path: 'order',
    component: order,
  },
  {
    path: 'analytic1',
    component: analytic1,
  },
  {
    path: 'homepurchase',
    component: homepurchase,
  }
];
