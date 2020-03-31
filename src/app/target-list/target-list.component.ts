import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css']
})
export class TargetListComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:no-input-rename
  @Input('item') item: any; // input utk terima data dari parent

  ngOnInit() {}

}
