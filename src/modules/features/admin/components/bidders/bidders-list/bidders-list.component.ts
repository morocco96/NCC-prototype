import { Component, OnInit } from '@angular/core';
import { BIDDERS } from 'src/modules/mock';
@Component({
  selector: 'app-bidders-list',
  templateUrl: './bidders-list.component.html',
  styleUrls: ['./bidders-list.component.scss']
})
export class BiddersListComponent implements OnInit {
bidders:Array<any> = BIDDERS;
  constructor() { }

  ngOnInit(): void {
  }

}
