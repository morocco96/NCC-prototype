import { Component, OnInit } from '@angular/core';
import { LOT_DOCUMENT} from 'src/modules/mock';
@Component({
  selector: 'app-lot-document',
  templateUrl: './lot-document.component.html',
  styleUrls: ['./lot-document.component.scss']
})
export class LotDocumentComponent implements OnInit {
  lot_document:Array<any> = LOT_DOCUMENT;

  constructor() { }

  ngOnInit(): void {
  }

}
