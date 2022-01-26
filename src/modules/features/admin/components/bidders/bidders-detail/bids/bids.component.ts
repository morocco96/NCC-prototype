import { Component, OnInit } from '@angular/core';
import { BIDS } from 'src/modules/mock';
@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.scss']
})
export class BidsComponent implements OnInit {
bids:Array<any> = BIDS;
  constructor() { }

  ngOnInit(): void {
  }

}
