import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as moment from 'moment';


@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
}
)

export class TargetComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  dateNow = moment().format('LL');

  selectedLanguage = null;

  ToDoList = [];

  toggle = true;

  items = [];

  now = moment();

  enableDisableRule(job) {
    this.toggle = !this.toggle;
  }

  ngOnInit() {
    this.apiService.getEmployee().subscribe(result => { // subscribe utk function blm tentu hasil ada. ex http hrs tunggu dlu
      this.items = result;
    });
  }

  changeEmployee(employeeid) {
    this.apiService.GetProgressSalesman(employeeid).subscribe(result => {
      // console.log('result', result);
      this.ToDoList = [];
      result.forEach(element => {

        const endDate = moment(element.EndDateSalesTarget);
        const remainingTargetInDays = endDate.diff(this.now, 'days');

        let remaining = `${remainingTargetInDays} days remaining`;

        if (remainingTargetInDays === 0) {
          remaining = 'Due on Today';
        }

        const obj = {
          Title: element.Name,
          Percentage: (100 / element.Target) * element.Actual,
          Time: remaining,
          Detail: `finished ${element.Actual} out of ${element.Target}`
        };

        this.ToDoList.push(obj);
      });


    });
  }

}
