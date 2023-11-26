import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../components/button.component';
import { ProgressBarComponentModule } from '../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
import { ButtonUnborderedModule } from '../components/buttonunbordered.component';
@Component({
  selector: 'merchant-register, MerchantRegister',
  template: `
    <nav class="flex flex-row">
      <div class="flex flex-col">
        <buttonunbordered label="Home"></buttonunbordered>
        <buttonunbordered label="View Applications"></buttonunbordered>
        <buttonunbordered label="View Reports"></buttonunbordered>
        <buttonunbordered label="Account"></buttonunbordered>
      </div>
      <div>
        <button>Logout</button>
      </div>
    </nav>
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
    ButtonUnborderedModule,
  ],
})
export class MerchantRegisterModule {}
