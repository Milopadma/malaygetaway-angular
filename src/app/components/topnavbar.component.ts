import { Input, NgModule, ContentChild, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponentModule } from './icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'topnavbar',
  template: `
    <header class="bg-white flex flex-col items-stretch bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div
        class="self-center flex w-full items-stretch justify-between gap-5 mt-7 px-24 max-md:max-w-full max-md:flex-wrap"
      >
        <h1 class="text-black text-3xl font-light leading-10 tracking-tighter">
          <icon iconName="Logo"></icon>
        </h1>
        <nav
          class="items-center flex justify-between gap-12 self-start max-md:justify-center"
        >
          <a
            (click)="navigateToNextPage('home')" 
            class="text-black text-base font-light leading-5 tracking-tighter cursor-pointer hover:underline transition-all duration-200"
            >Home</a
          >
          <a
            (click)="navigateToNextPage('benefits')"
            class="text-black text-base font-light leading-5 tracking-tighter cursor-pointer hover:underline transition-all duration-200"
            >Benefits</a
          >
          <a
            (click)="navigateToNextPage('about')"
            class="text-black text-base font-light leading-5 tracking-tighter cursor-pointer hover:underline transition-all duration-200"
            >About</a
          >
          <a
            (click)="navigateToNextPage('merchant/register')"
            class="text-base font-light leading-5 tracking-tighter whitespace-nowrap bg-softblack text-white px-6 py-2 cursor-pointer hover:underline transition-all duration-200"
            >Join Us</a
          >
        </nav>
      </div>
      <div class="h-4" id="spacer"></div>
    </header>
  `,
})
export class TopNavbar implements AfterContentInit {
  @Input() label!: string;
  //   @ContentChild('icon') Icon;

  ngAfterContentInit() {
    // console.log("icon:", this.icon);
  }

  // routing
    constructor(private router: Router) {}

    navigateToNextPage(page: string) {
      this.router.navigate([page]); // replace '/nextPage' with the actual route
    }
}

@NgModule({
  declarations: [TopNavbar],
  exports: [TopNavbar],
  imports: [CommonModule, IconComponentModule],
})
export class TopNavbarModule {}
