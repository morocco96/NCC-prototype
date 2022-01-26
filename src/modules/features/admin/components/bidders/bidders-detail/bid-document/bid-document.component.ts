import { Component, OnInit } from '@angular/core';
import { BID_DOCUMENT } from 'src/modules/mock';
@Component({
  selector: 'app-bid-document',
  templateUrl: './bid-document.component.html',
  styleUrls: ['./bid-document.component.scss']
})
export class BidDocumentComponent implements OnInit {
documents:Array<any> = BID_DOCUMENT;
  constructor() { }

  ngOnInit(): void {
  }

}
