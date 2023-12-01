import { Input, NgModule, ContentChild, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonbordered',
  template: `
    <div
      class="group text-paragraph border-2 border-softblack flex flex-row text-softblack text-2xl max-w-full cursor-pointer px-6 py-4 max-md:px-5 hover:bg-softblack hover:text-white transition-all duration-200"
    >
      <button type="submit" class="flex flex-row items-center justify-center">
        {{label}}
        <ng-content class="group-hover:invert"></ng-content> 
      </button>
    </div>
  `,
})
export class ButtonBordered implements AfterContentInit {
  @Input() label!: string;
//   @ContentChild('icon') Icon; 

  ngAfterContentInit() {
    // console.log("icon:", this.icon);
  }
}

@NgModule({
  declarations: [ButtonBordered],
  imports: [CommonModule],
  exports: [ButtonBordered],
})
export class ButtonBorderedModule {}