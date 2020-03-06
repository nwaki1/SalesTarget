import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-daily-targetand-period',
  templateUrl: './daily-targetand-period.component.html',
  styleUrls: ['./daily-targetand-period.component.css']
})
export class DailyTargetandPeriodComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            display: false
          },
          stacked: true,
          gridLines: {
            display: false,
            drawBorder: false
          },
          label : {
            display: false,
          }
        }
      ]
    },
    gridlines : {
      display : false
    },
    responsive: true
  };
  public barChartLabels = ['Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Eff', backgroundColor : '#4edbd5'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Total', backgroundColor : '#C7F2F0'}
  ];

  selectedTab = 'Weekly';

  constructor() { }

  ngOnInit() {
  }

  tabClass(selectedTab) {
    if (selectedTab === this.selectedTab) {
      return 'box d-flex tab-title justify-content-center py-2';
    } else {
      return 'box d-flex tab-title justify-content-center py-1';
    }
  }

  selectTabs(selectedTab) {
    this.selectedTab = selectedTab;
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
