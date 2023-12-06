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

type status = 'Pending' | 'Accepted' | 'Rejected';

export interface MerchantApplication {
  id: number;
  status: status;
  merchantName: string;
  description: string;
}

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
          <tbody>
            <tr>
              <th class="text-small text-left text-softgray">ID</th>
              <th class="text-small text-left text-softgray">Status</th>
              <th class="text-small text-left text-softgray">Merchant Name</th>
              <th class="text-small"></th>
            </tr>

            @for (application of applications; track application.id){
            <tr class="border-t-[1px] border-softblack">
              <td class="text-paragraph">{{ application.id }}</td>
              @if (application.status == 'Pending') {
              <td class="text-paragraph uppercase text-warning">
                {{ application.status }}
              </td>
              } @else if (application.status == 'Accepted') {
              <td class="text-paragraph uppercase text-confirm">
                {{ application.status }}
              </td>
              } @else if (application.status == 'Rejected') {
              <td class="text-paragraph uppercase text-reject">
                {{ application.status }}
              </td>
              }
              <td class="flex flex-col py-4">
                <span class="text-paragraph">{{
                  application.merchantName
                }}</span
                ><span class="text-small text-softgray">{{
                  application.description
                }}</span>
              </td>
              <td>
                <button
                  class="text-small hover:underline text-softblack"
                  (click)="
                    navigateToPage('officer/applications/' + application.id)
                  "
                >
                  See Details
                </button>
              </td>
            </tr>
            }
          </tbody>
        </table>
        <div class="flex flex-col w-full items-end">
          <div class="flex flex-col items-center">
            <div class="flex flex-row">
              <buttonnoicon label="<"></buttonnoicon>
              <div class="w-4" id="spacer"></div>
              <buttonnoicon label=">"></buttonnoicon>
            </div>
            <span class="text-paragraph">
              {{ currentPage }} of {{ totalPages }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class OfficerApplicationsComponent {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  // placeholder data
  applications: MerchantApplication[] = [
    {
      id: 1,
      status: 'Pending',
      merchantName: 'Acme',
      description: 'We are a company that focuses on this and that.',
    },
    {
      id: 2,
      status: 'Pending',
      merchantName: 'Acme',
      description: 'We are a company that focuses on this and that.',
    },
    {
      id: 3,
      status: 'Pending',
      merchantName: 'Acme',
      description: 'We are a company that focuses on this and that.',
    },
    {
      id: 4,
      status: 'Rejected',
      merchantName: 'Acme',
      description: 'We are a company that focuses on this and that.',
    },
    {
      id: 5,
      status: 'Accepted',
      merchantName: 'Acme',
      description: 'We are a company that focuses on this and that.',
    },
  ];

  // pagination data
  currentPage: number = 1;
  totalPages: number = 5;
}

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
