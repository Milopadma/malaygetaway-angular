import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonUnbordered } from '../../components/buttonunbordered.component';
import { IconComponent } from '../../components/icon.component';
import { ButtonNoIcon } from '../../components/buttonnoicon.component';
import { ApiService } from '../../api/api.service';
import { MerchantData, UserMerchant, MerchantStatus } from '../../types';

type status = 'Pending' | 'Accepted' | 'Rejected';

export interface MerchantApplication {
  id: number;
  status: status;
  merchantName: string;
  description: string;
}

@Component({
  selector: 'officer-applications-list',
  standalone: true,
  imports: [ButtonUnbordered, IconComponent, ButtonNoIcon],
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

            @for (application of applications; track application.merchantId){
            <tr class="border-t-[1px] border-softblack">
              <td class="text-paragraph">{{ application.merchantId }}</td>
              @if (application.status == "pending") {
              <td class="text-paragraph uppercase text-warning">
                {{ application.status }}
              </td>
              } @else if (application.status == 'accepted') {
              <td class="text-paragraph uppercase text-confirm">
                {{ application.status }}
              </td>
              } @else if (application.status == 'rejected') {
              <td class="text-paragraph uppercase text-reject">
                {{ application.status }}
              </td>
              }
              <td class="flex flex-col py-4">
                <span class="text-paragraph">{{ application.name }}</span
                ><span class="text-small text-softgray">{{
                  application.description
                }}</span>
              </td>
              <td>
                <button
                  class="text-small hover:underline text-softblack"
                  (click)="
                    navigateToPage(
                      'officer/applications/' + application.merchantId
                    )
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
export class OfficerApplicationsComponent implements OnInit {
  applications: MerchantData[] = [];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMerchants().subscribe(
      (res) => {
        this.applications = res.data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  // pagination data
  currentPage: number = 1;
  totalPages: number = 5;
}
