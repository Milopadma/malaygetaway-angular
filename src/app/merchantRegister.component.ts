import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from './components/button.component';
import { ProgressBarComponentModule } from './components/form/progressbar.component';

@Component({
  selector: 'merchant-register, MerchantRegister',
  template: `
    <main
      class="justify-center items-center bg-white flex flex-col px-20 max-md:px-5"
    >
      <!-- <nav
        class="flex w-[348px] max-w-full items-stretch justify-between gap-5 mt-48 max-md:justify-center max-md:mt-10"
      >
        <div class="flex shrink-0 h-[9px] flex-col flex-1 rounded-[50%]"></div>
        <div class="flex shrink-0 h-[9px] flex-col flex-1 rounded-[50%]"></div>
        <div class="flex shrink-0 h-[9px] flex-col flex-1 rounded-[50%]"></div>
        <div class="flex shrink-0 h-[9px] flex-col flex-1 rounded-[50%]"></div>
      </nav>
      <nav
        class="items-stretch flex w-[422px] max-w-full justify-between gap-5 mt-2.5 max-md:flex-wrap max-md:justify-center"
      >
        <a
          href="#"
          class="text-zinc-500 text-base font-light leading-5 tracking-tighter"
          >Business name</a
        >
        <a
          href="#"
          class="text-zinc-500 text-base font-light leading-5 tracking-tighter"
          >Details</a
        >
        <a
          href="#"
          class="text-zinc-500 text-base font-light leading-5 tracking-tighter"
          >Documents</a
        >
        <a
          href="#"
          class="text-zinc-500 text-base font-light leading-5 tracking-tighter whitespace-nowrap"
          >Done</a
        >
      </nav> -->
      <progress-bar
        [labels]="['Business name', 'Details', 'Documents', 'Done']"
        [current]="'Business name'"
      />
      <div class="flex flex-col">
        <h1
          class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
        >
          What is your business <br />
          name?
        </h1>
        <input
          type="text"
          class="text-stone-300 text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="business name"
        />
        <div class="h-32" id="spacer"></div>
        <div class="flex flex-col items-end">
          <buttonwicon></buttonwicon>
          <p
            class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
          >
            or press Enter
          </p>
        </div>
      </div>
    </main>
  `,
})
export class MerchantRegister {}

@NgModule({
  declarations: [MerchantRegister],
  exports: [MerchantRegister],
  imports: [CommonModule, buttonwIconModule, ProgressBarComponentModule],
})
export class MerchantRegisterModule {}
