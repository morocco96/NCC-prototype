import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bidder-row',
  templateUrl: './bidder-row.component.html',
  styleUrls: ['./bidder-row.component.scss']
})
export class BidderRowComponent implements OnInit {

  @Input() bidder:any;
  constructor() { }

  ngOnInit(): void {
  }

}
