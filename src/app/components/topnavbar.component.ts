import { Input, NgModule, ContentChild, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponentModule } from './icon.component';

@Component({
  selector: 'topnavbar',
  template: `
    <header class="bg-white flex flex-col items-stretch">
      <div
        class="self-center flex w-full max-w-[1141px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap"
      >
        <h1 class="text-black text-3xl font-light leading-10 tracking-tighter">
          <icon iconName="Logo"></icon>
        </h1>
        <nav
          class="items-center flex justify-between gap-12 self-start max-md:justify-center"
        >
          <a
            href="#"
            class="text-black text-base font-light leading-5 tracking-tighter"
            >Home</a
          >
          <a
            href="#"
            class="text-black text-base font-light leading-5 tracking-tighter"
            >Benefits</a
          >
          <a
            href="#"
            class="text-black text-base font-light leading-5 tracking-tighter"
            >About</a
          >
          <a
            href="#"
            class="text-base font-light leading-5 tracking-tighter whitespace-nowrap bg-softblack text-white px-6 py-2"
            >Register</a
          >
        </nav>
      </div>
    </header>
    <div class="h-4" id="spacer"></div>
  `,
})
export class TopNavbar implements AfterContentInit {
  @Input() label!: string;
  //   @ContentChild('icon') Icon;

  ngAfterContentInit() {
    // console.log("icon:", this.icon);
  }
}

@NgModule({
  declarations: [TopNavbar],
  exports: [TopNavbar],
  imports: [CommonModule, IconComponentModule],
})
export class TopNavbarModule {}
