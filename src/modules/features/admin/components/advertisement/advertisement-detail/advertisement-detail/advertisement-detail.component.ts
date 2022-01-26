import { Component, OnInit } from '@angular/core';
import { ADVERTS } from 'src/modules/mock';
@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.scss']
})
export class AdvertisementDetailComponent implements OnInit {
adverts:Array<any> = ADVERTS;
  constructor() { }

  ngOnInit(): void {
  }

}
