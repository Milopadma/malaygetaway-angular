import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../components/button.component';
import { ProgressBarComponentModule } from '../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../components/form/fileinput.component';
import { ButtonUnborderedModule } from '../components/buttonunbordered.component';
import { ButtonNoIconModule } from '../components/buttonnoicon.component';
import { IconComponentModule } from '../components/icon.component';
@Component({
  selector: 'login',
  template: `
    <div class="flex flex-row h-full justify-center items-center">
      <div class="flex flex-col">
        <div class="text-titles">Login</div>
        <div class="h-4" id="spacer"></div>
        <input
          type="text"
          class="text-stone-300 text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
          placeholder="username or email"
        />
        <div class="h-2" id="spacer"></div>
        <input
          type="text"
          class="text-stone-300 text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
          placeholder="password"
        />
        <div class="h-2" id="spacer"></div>
        <div class="flex flex-row gap-2 items-center justify-end">
            <div class="text-small text-right">
                don't have an account? <br>
                <span class="underline">register</span>
            </div>
          <buttonwicon
            (click)="navigateToNextPage()"
            label="Continue"
          ></buttonwicon>
        </div>
      </div>
      <div class="w-12" id="spacer"></div>
      <div class="">
        <!-- placeholder image -->
        <img src="https://via.placeholder.com/600x600" />
      </div>
    </div>
  `,
})
export class Login {
  constructor(private router: Router) {}
  navigateToNextPage() {
    this.router.navigate(['/merchant/home']);
  }
}

@NgModule({
  declarations: [Login],
  exports: [Login],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    ButtonUnborderedModule,
    ButtonNoIconModule,
    IconComponentModule,
  ],
})
export class LoginModule {}
