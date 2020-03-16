import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-targetand-period',
  templateUrl: './daily-targetand-period.component.html',
  styleUrls: ['./daily-targetand-period.component.css']
})
export class DailyTargetandPeriodComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  Total = 20000;

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

  public barChartLabels2 = [];
  public barChartType2 = 'bar';
  public barChartLegend2 = true;
  public barChartData2 = [];

  selectedTab = 'Weekly';
  showChart = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSalesOrderByEmployeeAndDate('64dc199f-0a04-4685-8ccf-3b756bb3a5d9', '2019-08-04', '2019-08-10');
  }

  getSalesOrderByEmployeeAndDate(employeeid, datefrom, dateto) {
    this.barChartLabels2 = ['Mon', 'Tues', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'];
    this.barChartType2 = 'bar';
    this.barChartLegend2 = true;
    this.barChartData2 = [
      {data: [0, 0, 0, 0, 0, 0, 0], label: 'Total', backgroundColor : '#C7F2F0'}
    ];

    this.apiService.GetSalesByEmployeeId(employeeid, datefrom, dateto).subscribe(result => {
      this.Total = result.find(x => x.Date === '2019-08-05T13:19:23').Total;
      result.forEach(element => {
        this.barChartData2[0].data[element.Days - 1] = element.Total;
      });
      this.showChart = true;
    });
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
