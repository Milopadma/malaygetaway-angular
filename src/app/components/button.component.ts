import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonwicon, buttonwicon',
  template: `
    <div
      class="flex flex-row text-zinc-800 text-2xl font-light leading-7 tracking-tighter border-softblack max-w-full gap-2.5 px-6 py-2 border-2 border-solid max-md:px-5 cursor-pointer"
    >
      <button type="submit">Continue</button>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f9c8e17-218b-4f82-8954-1110269203e2?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
        alt=""
        class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
      />
    </div>
  `,
})
export class ButtonwIcon {}

@NgModule({
  declarations: [ButtonwIcon],
  imports: [CommonModule],
  exports: [ButtonwIcon],
})
export class buttonwIconModule {}
