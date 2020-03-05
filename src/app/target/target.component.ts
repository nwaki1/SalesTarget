import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  constructor() { }
  dateNow='5 March 2020';
  ngOnInit() {
    
  }
  ToDoList = [
    {
      Title: 'To do title',
      Percentage: 50,
      Time: '2h',
      Detail:'detail here'
    },
    {
      Title: 'To do title',
      Percentage: 70,
      Time: '2h',
      Detail:'detail here'
    },
    {
      Title: 'To do title',
      Percentage: 30,
      Time: '2h',
      Detail:'detail here'
    },
  ]
}
