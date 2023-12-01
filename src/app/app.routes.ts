import { Routes } from '@angular/router';

// Epic 1-3 (milo e2000426)
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

// Epic 4-6 (adit e2000427)
import { NgModule } from '@angular/core';
import { order } from './order.component';
import { reviewKL } from './pages/customer/reviews/reviewKL.component';
import { reviewAquaria } from './pages/customer/reviews/reviewAquaria.component';
import { reviewGenting } from './pages/customer/reviews/reviewGenting.component';
import { send } from './pages/customer/reviews/send.component';
import { CustomerProductComponent } from './pages/customer/purchase.component';
import { CustomerLayout } from './pages/customer/customerlayout.component';
import { HomePurchase } from './pages/customer/homePurchase.component';
import { analytic1 } from './analytic1.component';

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
    path: 'review', // todo! unimplemented!
    component: MerchantRegisterCTA,
  },
  {
    path: 'manage', // todo! unimplemented!
    component: MerchantRegisterCTA,
  },
  {
    path: 'analytics', // todo! unimplemented!
    component: MerchantRegisterCTA,
  },

  // epic 4
  {
    path: 'customer',
    component: CustomerLayout,
    children: [
      {
        path: '',
        component: HomePurchase,
      },
      {
        path: 'home',
        component: HomePurchase,
      },
      {
        path: 'review',
        component: reviewAquaria,
      },
      {
        path: 'product/:id',
        component: CustomerProductComponent,
      },
    ],
  },

  // epic 5
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
];
