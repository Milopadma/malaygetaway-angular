import { Routes } from '@angular/router';

<<<<<<< HEAD
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
=======
// Epic 1-3 (milo e2000426)
import { MerchantRegisterCTA } from './pages/registrationform/registercta.component';
>>>>>>> 07437afeda6d13d2d78bce776815361d56e79711
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
<<<<<<< HEAD
import { homepurchase } from './homePurchase.componment';
=======
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
import { reviewKL } from './reviewKL.component';
import { reviewAquaria } from './reviewAquaria.component';
import { reviewGenting } from './reviewGenting.component';
import { send } from './send.component';

import { purchase1 } from './pages/customer/purchase.component';
import { purchase2 } from './pages/customer/purchase2.componen';
import { purchase3 } from './pages/customer/purchase3.component';
import { purchase4 } from './pages/customer/purchase4.component';
import { purchase5 } from './pages/customer/purchase5.component';

>>>>>>> 07437afeda6d13d2d78bce776815361d56e79711

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
  {
    path: 'homepurchase',
    component: homepurchase,
  }
];
