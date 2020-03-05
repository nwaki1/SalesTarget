import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ToDoList = [
    {
      Title: 'To do title',
      Percentage: 'finished work',
      Time: '2h',
      Detail:'detail here'
    },
    {
      Title: 'To do title',
      Percentage: 'finished work',
      Time: '2h',
      Detail:'detail here'
    },
    {
      Title: 'To do title',
      Percentage: 'finished work',
      Time: '2h',
      Detail:'detail here'
    },
  ]
}
