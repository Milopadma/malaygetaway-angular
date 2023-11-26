import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'huge-button',
  template: `
    <div
      class="text-titles flex flex-col text-softblack max-w-full cursor-pointer py-32 border-2 border-softblack px-20"
    >
      <button type="submit">
        <span class="line-clamp-2 text-left">{{ label.split(' ')[0] }}</span>
        <span class="line-clamp-2 text-left">{{ label.split(' ').slice(1).join(' ') }}</span>
      </button>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f9c8e17-218b-4f82-8954-1110269203e2?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
        alt=""
        class="aspect-square object-contain object-center w-8 overflow-hidden self-end shrink-0 max-w-full"
      />
    </div>
  `,
})
export class HugeButton {
  @Input() label!: string;
}

@NgModule({
  declarations: [HugeButton],
  imports: [CommonModule],
  exports: [HugeButton],
})
export class HugeButtonModule {}
