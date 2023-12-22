import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonnoicon',
  standalone: true,
  template: `
    <div
      class="flex flex-row text-softblack text-2xl font-light leading-7 tracking-tighter border-softblack max-w-full gap-2.5 px-6 py-2 border-2 border-solid max-md:px-5 cursor-pointer hover:bg-softblack hover:text-white transition-all duration-200"
    >
      <button type="submit">{{ label }}</button>
    </div>
  `,
})
export class ButtonNoIcon {
  @Input() label!: string;
}
