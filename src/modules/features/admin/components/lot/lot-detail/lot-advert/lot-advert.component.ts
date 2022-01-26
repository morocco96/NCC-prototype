import { Component, OnInit } from '@angular/core';
import { LOT_ADVERT} from 'src/modules/mock';
@Component({
  selector: 'app-lot-advert',
  templateUrl: './lot-advert.component.html',
  styleUrls: ['./lot-advert.component.scss']
})
export class LotAdvertComponent implements OnInit {
  lot_advert:Array<any> = LOT_ADVERT;

  constructor() { }

  ngOnInit(): void {
  }

}
