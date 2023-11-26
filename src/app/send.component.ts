import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ProgressBarComponentModule } from "./components/form/progressbar.component";
import { buttonwIconModule } from "./components/button.component";
import { Router } from '@angular/router';

@Component({
    selector: 'send',
    template: `
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-4">
            <div class="bg-green-100 p-8 rounded-lg shadow-lg">
                <div>
                    <div class="flex justify-center items-center mb-2">
                        <img src="https://www.pinclipart.com/picdir/big/523-5232109_check-mark-computer-icons-clip-art-green-checkmark.png" alt="Credit Card" class="h-20">
                    </div>
                    <br>
                    <br>
                    <div class="text-center">
                        <h2 class="text-3xl font-bold mb-2 text-green-800">GREAT</h2>
                        <p class="text-xl text-green-700">Your review successfully send.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    `,
  })
  
export class send  {
    constructor(private router: Router) {}
}
@NgModule({
    declarations: [send],
    exports: [send],
    imports: [CommonModule, ProgressBarComponentModule, buttonwIconModule]
})
export class sendModule {}