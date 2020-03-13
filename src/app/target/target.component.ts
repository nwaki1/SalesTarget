import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
}
)

export class TargetComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  dateNow = '5 March 2020';
  ToDoList = [
    {
      Title: 'To do title',
      Percentage: 50,
      Time: '2h',
      Detail: 'detail here'
    },
    {
      Title: 'To do title',
      Percentage: 70,
      Time: '2h',
      Detail: 'detail here'
    },
    {
      Title: 'To do title',
      Percentage: 30,
      Time: '2h',
      Detail: 'detail here'
    },
  ]

  toggle = true;
  enableDisableRule(job) {
    this.toggle = !this.toggle;
  }
  
  items = [];

  ngOnInit() {
    this.apiService.getNews().subscribe(result=>{ //subscribe utk function blm tentu hasil ada. ex http hrs tunggu dlu
      console.log(result);
      this.items=result;
    });
    
  }

}
