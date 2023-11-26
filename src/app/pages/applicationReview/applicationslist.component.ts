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
@Component({
  selector: 'officer-applications-list',
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <h1 class="text-titles">Applications</h1>
      <div class="h-4" id="spacer"></div>
      <span class="text-paragraph">Review submitted applications</span>
      <div class="h-4" id="spacer"></div>
      <div class="flex flex-row gap-8">
        <span class="text-paragraph"> ⏺︎ 982 Applications </span>
        <span class="text-paragraph"> ⏺︎ 22 Pending </span>
        <span class="text-paragraph"> ⏺︎ 52 Approved </span>
        <span class="text-paragraph"> ⏺︎ 44 Rejected </span>
      </div>
      <buttonunbordered label="Filter By"
        ><icon iconName="ChevronDown"></icon
      ></buttonunbordered>
      <div class="flex flex-col">
        <table>
          <tr>
            <th class="text-small text-left text-softgray">ID</th>
            <th class="text-small text-left text-softgray">Status</th>
            <th class="text-small text-left text-softgray">Merchant Name</th>
            <th class="text-small"></th>
          </tr>

          <tr class="border-t-[1px] border-softblack">
            <td class="text-paragraph">1</td>
            <td class="text-paragraph uppercase text-warning">Pending</td>
            <td class="flex flex-col py-4">
              <span class="text-paragraph">Acme</span
              ><span class="text-small text-softgray">Descriptions</span>
            </td>
            <td>
              <button class="text-small underline text-softblack">
                See Details
              </button>
            </td>
          </tr>

          <tr class="border-t-[1px] border-softblack">
            <td class="text-paragraph">1</td>
            <td class="text-paragraph uppercase text-warning">Pending</td>
            <td class="flex flex-col py-4">
              <span class="text-paragraph">Acme</span
              ><span class="text-small text-softgray">Descriptions</span>
            </td>
            <td>
              <button class="text-small underline text-softblack">
                See Details
              </button>
            </td>
          </tr>

          <tr class="border-t-[1px] border-softblack">
            <td class="text-paragraph">1</td>
            <td class="text-paragraph uppercase text-warning">Pending</td>
            <td class="flex flex-col py-4">
              <span class="text-paragraph">Acme</span
              ><span class="text-small text-softgray">Descriptions</span>
            </td>
            <td>
              <button class="text-small underline text-softblack">
                See Details
              </button>
            </td>
          </tr>

          <tr class="border-t-[1px] border-softblack">
            <td class="text-paragraph">1</td>
            <td class="text-paragraph uppercase text-reject">Rejected</td>
            <td class="flex flex-col py-4">
              <span class="text-paragraph">Acme</span
              ><span class="text-small text-softgray">Descriptions</span>
            </td>
            <td>
              <button class="text-small underline text-softblack">
                See Details
              </button>
            </td>
          </tr>

          <tr class="border-t-[1px] border-softblack">
            <td class="text-paragraph">1</td>
            <td class="text-paragraph uppercase text-confirm">Accepted</td>
            <td class="flex flex-col py-4">
              <span class="text-paragraph">Acme</span
              ><span class="text-small text-softgray">Descriptions</span>
            </td>
            <td>
              <button class="text-small underline text-softblack">
                See Details
              </button>
            </td>
          </tr>
        </table>
        <div class="flex flex-row w-full justify-end">
          <buttonnoicon label="<"></buttonnoicon>
          <div class="w-4" id="spacer"></div>
          <buttonnoicon label=">"></buttonnoicon>
        </div>
      </div>
    </div>
  `,
})
export class OfficerApplicationsComponent {}

@NgModule({
  declarations: [OfficerApplicationsComponent],
  exports: [OfficerApplicationsComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    ButtonUnborderedModule,
    ButtonNoIconModule,
    IconComponentModule,
  ],
})
export class OfficerApplicationsComponentModule {}
