import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonunbordered',
  template: `
    <div
      class="text-paragraph flex flex-row text-softblack text-2xl max-w-full cursor-pointer px-6 py-4 max-md:px-5"
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
