import { Component, OnInit } from '@angular/core';
import { LOT_TENDER} from 'src/modules/mock';
@Component({
  selector: 'app-lot-tender',
  templateUrl: './lot-tender.component.html',
  styleUrls: ['./lot-tender.component.scss']
})
export class LotTenderComponent implements OnInit {
  lot_tender:Array<any> = LOT_TENDER;

  constructor() { }

  ngOnInit(): void {
  }

}
