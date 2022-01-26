import { Component, OnInit } from '@angular/core';
import { AWARD } from 'src/modules/mock';
@Component({
  selector: 'app-bid-award',
  templateUrl: './bid-award.component.html',
  styleUrls: ['./bid-award.component.scss']
})
export class BidAwardComponent implements OnInit {
  awards:Array<any> = AWARD;
  constructor() { }

  ngOnInit(): void {
  }

}
