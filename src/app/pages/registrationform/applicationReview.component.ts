import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { progressbar } from '../../components/form/progressbar.component';
@Component({
  selector: 'merchant-register, MerchantRegister',
  standalone: true,
  imports: [RouterOutlet, progressbar],
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
