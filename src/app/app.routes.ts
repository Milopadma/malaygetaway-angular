import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// purchase tourism
import { purchase1 } from './pages/customer/purchase.component';
import { purchase2 } from './pages/customer/purchase2.componen';
import { purchase3 } from './pages/customer/purchase3.component';
import { purchase4 } from './pages/customer/purchase4.component';
import { purchase5 } from './pages/customer/purchase5.component';

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
import { Benefits } from './pages/home/benefits.component';
import { About } from './pages/home/about.component';
import { MerchantEditProductsComponent } from './pages/merchant/editproduct.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'benefits',
    component: Benefits,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'merchant/register', //localhost:4200/merchant/register
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
      {
        path: 'editproduct/:id',
        component: MerchantEditProductsComponent,
      }
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
  //   {
  //     path: 'customer'
  //     // component: CustomerLayout,
  //     children: [
  //     {
  //       path: 'home',
  //       // component: CustomerHomeComponent,
  //     },
  //     {
  //       path: 'product/:id'
  //       // component: CustomerProductComponent,
  //     },
    //     {
  //       path: 'personaldetail/:id'
  //       // component: CustomerPersonalDetailComponent,
  //     },
    //     {
  //       path: 'billingaddress/:id'
  //       // component: CustomerBillingAddressComponent,
  //     },
    //     {
  //       path: 'paymentmethod/:id'
  //       // component: CustomerPaymentMethodComponent,
  //     },
    //     {
  //       path: 'pastorders/:id'
  //       // component: CustomerProductComponent,
  //     },
    //     {
  //       path: 'review/:id'
  //       // component: CustomerProductComponent,
  //     },

  // ]},
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
