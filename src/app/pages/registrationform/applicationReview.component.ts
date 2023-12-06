import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'merchant-register, MerchantRegister',
  template: `
    <main
      class="justify-center items-center bg-white flex flex-col px-20 max-md:px-5"
    >
      <progress-bar
        [labels]="['Business name', 'Details', 'Documents', 'Done']"
        [current]="'Business name'"
      />
      <router-outlet></router-outlet>
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
  ],
})
export class MerchantRegisterModule {}
