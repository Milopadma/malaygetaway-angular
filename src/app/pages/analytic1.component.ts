import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Chart.js
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-analytic1',
  standalone: true,
  template: `
    <section class="py-20">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <br />
          <h2 class="text-titles font-bold mb-5">Reports</h2>
          <h2 class="text-paragraph font-medium mb-10">Analytic Reports</h2>
          <div class="grid grid-cols-10 md:grid-cols-3 gap-4">
            <div class="p-4 pt-14 border rounded-lg shadow-sm">
              <h2 class="text-paragraph text-center font-medium mb-10">
                Promotion Initiatives
              </h2>
              <canvas id="chart1"></canvas>
            </div>
            <div class="p-4 pt-14 border rounded-lg shadow-sm">
              <h2 class="text-paragraph text-center font-medium mb-10">
                Budget Allocation
              </h2>
              <canvas id="chart2"></canvas>
            </div>
            <div class="p-4 border rounded-lg shadow-sm">
              <h2 class="text-paragraph text-center font-medium mb-1">
                Visitor Statistics
              </h2>
              <canvas id="chart3"></canvas>
            </div>
          </div>
          <div class="mt-10">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Priority
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Project
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Reach
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Impact
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Confidence
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Effort
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <!-- Multiple rows of data here -->
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">🔴🔴🔴</td>
                    <td class="px-6 py-4 whitespace-nowrap">Project 1</td>
                    <td class="px-6 py-4 whitespace-nowrap">10,000</td>
                    <td class="px-6 py-4 whitespace-nowrap">🟢🟢🟢</td>
                    <td class="px-6 py-4 whitespace-nowrap">70%</td>
                    <td class="px-6 py-4 whitespace-nowrap">🟡🟡⚪️</td>
                    <td class="px-6 py-4 whitespace-nowrap">4,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class analytic1 implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    // Data untuk Chart 1 (Visitor Statistics)
    const data1 = {
      labels: [
        'Petronas KL',
        'Genting',
        'Aquaria KLCC',
        'Bukit Bintang',
        'Istana Negara',
      ],
      datasets: [
        {
          label: 'Number of Visitors',
          data: [120000, 95000, 75000, 85000, 65000], // Sample data
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    new Chart('chart1', {
      type: 'bar',
      data: data1,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const data2 = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Budget in RM (millions)',
          data: [15, 20, 25, 10],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    new Chart('chart2', {
      type: 'line',
      data: data2,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const data3 = {
      labels: [
        'Social Media',
        'Travel Fairs',
        'Partner Collaborations',
        'Tourism Packages',
        'Advertising Campaigns',
      ],
      datasets: [
        {
          label: 'Engagement Rate',
          data: [55, 40, 65, 70, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    new Chart('chart3', {
      type: 'pie',
      data: data3,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}
