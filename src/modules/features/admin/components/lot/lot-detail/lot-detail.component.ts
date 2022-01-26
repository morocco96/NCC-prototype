import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LOT_FIELD } from 'src/modules/mock';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.component.html',
  styleUrls: ['./lot-detail.component.scss']
})
export class LotDetailsComponent implements OnInit {
  lot_field:Array<any> = LOT_FIELD;

  observable =fromEvent(window, 'mousemove')
  constructor(private location: Location) { 
  
  }

  goBack() {
    this.location.back();
  }
  ngOnInit(): void {
  }

}
