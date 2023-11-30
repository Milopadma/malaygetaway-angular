import { Input, NgModule, ContentChild, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'buttonunbordered',
  template: `
    <div
      class="text-paragraph flex flex-row text-softblack text-2xl max-w-full cursor-pointer px-6 py-4 max-md:px-5 border-2 border-white hover:bg-softblack hover:text-white transition-all duration-200"
    >
      <button type="submit" class="flex flex-row items-center justify-center">
        {{label}}
        <ng-content></ng-content> 
      </button>
    </div>
  `,
})
export class ButtonUnbordered implements AfterContentInit {
  @Input() label!: string;
//   @ContentChild('icon') Icon; 

  ngAfterContentInit() {
    // console.log("icon:", this.icon);
  }
}

@NgModule({
  declarations: [ButtonUnbordered],
  imports: [CommonModule],
  exports: [ButtonUnbordered],
})
export class ButtonUnborderedModule {}
