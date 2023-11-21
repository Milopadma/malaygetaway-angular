import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html',
  template: `
      <header class="bg-white flex flex-col items-stretch">
      <div class="self-center flex w-full max-w-[1141px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <h1 class="text-black text-3xl font-light leading-10 tracking-tighter">header</h1>
        <nav class="items-stretch flex justify-between gap-5 self-start max-md:justify-center">
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter">header</a>
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter">header</a>
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter">header</a>
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter whitespace-nowrap">header</a>
        </nav>
      </div>
    </header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'malaygetaway-angular';
}
