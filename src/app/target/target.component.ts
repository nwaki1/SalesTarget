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
  enableDisableRule(job) {
    this.toggle = !this.toggle;
  }

  items = [];

  ngOnInit() {
    this.apiService.getEmployee().subscribe(result => { //subscribe utk function blm tentu hasil ada. ex http hrs tunggu dlu
      this.items = result;
    });
  }

  changeEmployee(employeeid) {
    this.apiService.GetProgressSalesman(employeeid).subscribe(result => {
      console.log('result', result);
      this.ToDoList = [];
      result.forEach(element => {
        var obj = {
          Title: element.Name,
          Percentage: (element.Target / 100) * element.Actual,
          Time: '2h',
          Detail: 'detail here'
        }
        this.ToDoList.push(obj)
      });


    });
  }

}
