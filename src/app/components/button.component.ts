import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonwicon, buttonwicon',
  standalone: true,
  template: `
    <div
      class="group flex flex-row text-softblack text-2xl font-light leading-7 tracking-tighter border-softblack max-w-full gap-2.5 px-6 py-2 border-2 border-solid max-md:px-5 cursor-pointer hover:bg-softblack hover:text-white transition-all duration-200"
    >
      <button type="submit">{{ label }}</button>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f9c8e17-218b-4f82-8954-1110269203e2?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
        alt=""
        class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full transition-all duration-200 group-hover:invert"
      />
    </div>
  `,
})
export class ButtonwIcon {
  @Input() label!: string;
}
