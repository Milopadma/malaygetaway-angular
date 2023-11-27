import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// purchase tourism
import { purchase1 } from './purchase.component';
import { purchase2 } from './purchase2.componen';
import { purchase3 } from './purchase3.component';
import { purchase4 } from './purchase4.component';
import { purchase5 } from './purchase5.component';

// merchant registration flow
import { MerchantRegisterCTA } from './pages/registrationform/registercta.component';
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
import { Login } from './pages/login.component';
import { MerchantHomeComponent } from './pages/merchant/home.component';
import { MerchantViewProductsComponent } from './pages/merchant/viewproducts.component';
import { MerchantAddProductsComponent } from './pages/merchant/addproducts.component';
import { Home } from './pages/home/home.component';
import { MerchantLayout } from './pages/merchant/merchantlayout.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'merchant',
    component: MerchantLayout,
    children: [
      {
        path: '',
        component: MerchantHomeComponent,
      },
      {
        path: 'home',
        component: MerchantHomeComponent,
      },
      {
        path: 'products',
        component: MerchantViewProductsComponent,
      },
      {
        path: 'addproduct',
        component: MerchantAddProductsComponent,
      },
    ],
  },
  {
    path: 'merchant/register',
    component: MerchantRegister,
    children: [
      {
        path: '',
        component: MerchantRegisterCTA,
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
    path: 'officer',
    component: OfficerLayout,
    children: [
      {
        path: '',
        component: OfficerHomeComponent,
      },
      {
        path: 'home',
        component: OfficerHomeComponent,
      },
      {
        path: 'applications',
        component: OfficerApplicationsComponent,
      },
      {
        path: 'applications/:id',
        component: OfficerMerchantApplicationsComponent,
      },
    ],
  },
  {
    path: 'review',
    component: MerchantRegisterCTA,
  },
  {
    path: 'manage',
    component: MerchantRegisterCTA,
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
    component: MerchantRegisterCTA,
  },
  // 404
  {
    path: '**',
    component: NotFoundComponent,
  },
];
