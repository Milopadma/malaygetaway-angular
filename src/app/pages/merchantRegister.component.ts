import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../components/button.component';
import { ProgressBarComponentModule } from '../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'merchant-register, MerchantRegister',
  template: `
    <header class="bg-white flex flex-col items-stretch">
      <div
        class="self-center flex w-full max-w-[1141px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap"
      >
        <h1 class="text-black text-3xl font-light leading-10 tracking-tighter">
          header
        </h1>
        <nav
          class="items-stretch flex justify-between gap-5 self-start max-md:justify-center"
        >
          <a
            href="#"
            class="text-black text-base font-light leading-5 tracking-tighter"
            >header</a
          >
          <a
            href="#"
            class="text-black text-base font-light leading-5 tracking-tighter"
            >header</a
          >
          <a
            href="#"
            class="text-black text-base font-light leading-5 tracking-tighter"
            >header</a
          >
          <a
            href="#"
            class="text-black text-base font-light leading-5 tracking-tighter whitespace-nowrap"
            >header</a
          >
        </nav>
      </div>
    </header>

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
