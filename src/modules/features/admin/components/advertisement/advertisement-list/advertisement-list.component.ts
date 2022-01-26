import { Component, OnInit } from '@angular/core';
import { ADVERTISEMENT } from 'src/modules/mock';
@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss']
})
export class AdvertisementListComponent implements OnInit {

  advertisements:Array<any> = ADVERTISEMENT;
  hasIcon:boolean = true;
  alertSelected(){}
  option ='0'
  constructor() { }

  ngOnInit(): void {
  }

}
