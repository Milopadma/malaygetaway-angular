import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'merchantregistercta',
  template: `

    <section
      class="self-center flex w-full max-w-[899px] justify-between gap-5 mt-36 mb-48 max-md:max-w-full max-md:flex-wrap max-md:my-10"
    >
      <div class="flex grow basis-[0%] flex-col items-stretch px-5">
        <h2
          class="text-black text-5xl font-black leading-[58px] tracking-tighter -mr-5 max-md:text-4xl max-md:leading-[54px]"
        >
          <span>Register</span>
          <br />
          <span>as merchant</span>
        </h2>
        <p
          class="text-black text-2xl font-light leading-7 tracking-tighter -mr-5 mt-4"
        >
          <span>Start listing your businesses with</span>
          <br />
          <span>us</span>
        </p>
        <div class="h-8" id="spacer"></div>
        <div class="flex flex-shrink">
          <buttonwicon (click)="navigateToNextPage()" label="Start"></buttonwicon>
        </div>
      </div>
    </section>

    <div class="flex gap-0 mt-5">
      <div
        class="bg-blue-400 flex mr-0 w-[163px] shrink-0 h-[272px] flex-col"
      ></div>
      <div
        class="bg-blue-300 flex w-[163px] shrink-0 h-[272px] flex-col mt-20 self-end max-md:mt-10"
      ></div>
    </div>
  `,
})
export class MerchantRegisterCTA {
  constructor(private router: Router) {}

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/name']); // replace '/nextPage' with the actual route
  }
}

@NgModule({
  declarations: [MerchantRegisterCTA],
  exports: [MerchantRegisterCTA],
  imports: [CommonModule, buttonwIconModule],
})
export class MerchantRegisterCTAModule {}
