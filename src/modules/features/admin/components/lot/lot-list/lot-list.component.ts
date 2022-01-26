import { Component, OnInit } from '@angular/core';
import { LOT } from 'src/modules/mock';
@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.scss']
})
export class LotListComponent implements OnInit {

  lots:Array<any> = LOT;

  constructor() { }

  ngOnInit(): void {
  }

}
