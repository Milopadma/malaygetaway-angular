import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'businessname-form',
  template: `
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
  `,
})
export class BusinessNameFormComponent {}

@NgModule({
  declarations: [BusinessNameFormComponent],
  exports: [BusinessNameFormComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
  ],
})
export class BusinessNameFormComponentModule {}
