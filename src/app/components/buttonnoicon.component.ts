import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonnoicon',
  template: `
    <div
      class="flex flex-row text-softblack text-2xl font-light leading-7 tracking-tighter border-softblack max-w-full gap-2.5 px-6 py-2 border-2 border-solid max-md:px-5 cursor-pointer"
    >
      <button type="submit">{{label}}</button>
    </div>
  `,
})
export class ButtonNoIcon {
  @Input() label!: string;
}

@NgModule({
  declarations: [ButtonNoIcon],
  imports: [CommonModule],
  exports: [ButtonNoIcon],
})
export class ButtonNoIconModule {}
