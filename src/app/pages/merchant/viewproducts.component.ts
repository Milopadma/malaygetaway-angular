import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
import { ButtonUnborderedModule } from '../../components/buttonunbordered.component';
import { ButtonNoIconModule } from '../../components/buttonnoicon.component';
import { IconComponentModule } from '../../components/icon.component';
import { ButtonBorderedModule } from '../../components/buttonbordered.component';
@Component({
  selector: 'merchant-products-list',
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <h1 class="text-titles">View Products</h1>
      <div class="h-4" id="spacer"></div>
      <span class="text-paragraph">Manage the products in your catalogue</span>
      <div class="h-4" id="spacer"></div>
      <div class="flex flex-row justify-between">
        <buttonbordered label="Filter By"
          ><icon iconName="ChevronDown"></icon
        ></buttonbordered>
        <buttonbordered label="Add"
          ><icon iconName="ChevronDown"></icon
        ></buttonbordered>
      </div>
      <div class="flex flex-col">
        <div class="h-4" id="spacer"></div>
        <!--  -->
        <div class="flex flex-row border-t-2 border-fadedgray pt-4 pb-6">
          <div>
            <!-- placeholder image -->
            <img src="https://via.placeholder.com/165x165" />
          </div>
          <div class="w-12" id="spacer"></div>
          <div class="flex flex-col">
            <div class="text-subtitles text-softblack">Acme Product</div>
            <div class="flex flex-row gap-4">
              <div class="text-small text-softgray">Merchant Name</div>
              <div class="text-small text-softgray">Product Type</div>
            </div>
            <div class="h-4" id="spacer"></div>
            <div class="text-small text-softblack">Product Description</div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-row border-t-2 border-fadedgray pt-4 pb-6">
          <div>
            <!-- placeholder image -->
            <img src="https://via.placeholder.com/165x165" />
          </div>
          <div class="w-12" id="spacer"></div>
          <div class="flex flex-col">
            <div class="text-subtitles text-softblack">Acme Product</div>
            <div class="flex flex-row gap-4">
              <div class="text-small text-softgray">Merchant Name</div>
              <div class="text-small text-softgray">Product Type</div>
            </div>
            <div class="h-4" id="spacer"></div>
            <div class="text-small text-softblack">Product Description</div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-row border-t-2 border-fadedgray pt-4 pb-6">
          <div>
            <!-- placeholder image -->
            <img src="https://via.placeholder.com/165x165" />
          </div>
          <div class="w-12" id="spacer"></div>
          <div class="flex flex-col">
            <div class="text-subtitles text-softblack">Acme Product</div>
            <div class="flex flex-row gap-4">
              <div class="text-small text-softgray">Merchant Name</div>
              <div class="text-small text-softgray">Product Type</div>
            </div>
            <div class="h-4" id="spacer"></div>
            <div class="text-small text-softblack">Product Description</div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-row border-t-2 border-fadedgray pt-4 pb-6">
          <div>
            <!-- placeholder image -->
            <img src="https://via.placeholder.com/165x165" />
          </div>
          <div class="w-12" id="spacer"></div>
          <div class="flex flex-col">
            <div class="text-subtitles text-softblack">Acme Product</div>
            <div class="flex flex-row gap-4">
              <div class="text-small text-softgray">Merchant Name</div>
              <div class="text-small text-softgray">Product Type</div>
            </div>
            <div class="h-4" id="spacer"></div>
            <div class="text-small text-softblack">Product Description</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MerchantViewProductsComponent {}

@NgModule({
  declarations: [MerchantViewProductsComponent],
  exports: [MerchantViewProductsComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    ButtonUnborderedModule,
    ButtonNoIconModule,
    IconComponentModule,
    ButtonBorderedModule,
  ],
})
export class MerchantViewProductsComponentModule {}
