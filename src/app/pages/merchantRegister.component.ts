import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../components/button.component';
import { ProgressBarComponentModule } from '../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
import { TopNavbarModule } from '../components/topnavbar.component';
@Component({
  selector: 'merchant-register, MerchantRegister',
  template: `
    <topnavbar></topnavbar>

    <main
      class="justify-center items-center bg-white flex flex-col px-20 max-md:px-5"
    >
      <progress-bar
        [labels]="['Business name', 'Details', 'Documents', 'Done']"
        [current]="'Business name'"
      />
      <div class="flex w-full items-center justify-center">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class MerchantRegister {}

@NgModule({
  declarations: [MerchantRegister],
  exports: [MerchantRegister],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    TopNavbarModule,
  ],
})
export class MerchantRegisterModule {}
