import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'businessdetails-form',
  template: `
    <div class="flex flex-col">
      <h1
        class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
      >
        Mind telling us more about your business?
      </h1>
      <input
        type="text"
        class="text-stone-300 text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
        placeholder="contact number"
      />
      <input
        type="text"
        class="text-stone-300 text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
        placeholder="contact email"
      />
      <textarea
        #textarea
        (input)="autoResize(textarea)"
        class="text-stone-300 h-32 text-paragraph leading-7 tracking-tighter border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1 resize-y"
        placeholder="brief company description"
        rows="1"
      ></textarea>
      <div class="h-32" id="spacer"></div>
      <div class="flex flex-col items-end">
        <buttonwicon label="Continue"></buttonwicon>
        <p
          class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
        >
          or press Enter
        </p>
      </div>
    </div>
  `,
})
export class BusinessDetailsFormComponent {
  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.overflow = 'auto';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}

@NgModule({
  declarations: [BusinessDetailsFormComponent],
  exports: [BusinessDetailsFormComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
  ],
})
export class BusinessDetailsFormComponentModule {}
