import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonunbordered',
  template: `
    <div
      class="flex flex-row text-softblack text-2xl font-light leading-7 tracking-tighter max-w-full gap-2.5 px-6 py-2 max-md:px-5 cursor-pointer"
    >
      <button type="submit">{{label}}</button>
    </div>
  `,
})
export class ButtonUnbordered {
  @Input() label!: string;
}

@NgModule({
  declarations: [ButtonUnbordered],
  imports: [CommonModule],
  exports: [ButtonUnbordered],
})
export class ButtonUnborderedModule {}
