import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbar } from '../../components/topnavbar.component';
import { ProgressBarComponent } from '../../components/form/progressbar.component';
@Component({
  selector: 'merchant-register, MerchantRegister',
  standalone: true,
  imports: [RouterOutlet, TopNavbar, ProgressBarComponent],
  template: `
    <topnavbar></topnavbar>

    <main
      class="justify-center items-center bg-white flex flex-col px-20 max-md:px-5"
    >
      <div class="flex w-full items-center justify-center">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class MerchantRegister {}
