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
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
