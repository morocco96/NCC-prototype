import { Component, OnInit } from '@angular/core';
import { ADVERT_DOCUMENT } from 'src/modules/mock';

@Component({
  selector: 'app-advertisement-document',
  templateUrl: './advertisement-document.component.html',
  styleUrls: ['./advertisement-document.component.scss']
})
export class AdvertisementDocumentComponent implements OnInit {
adverts:Array<any> = ADVERT_DOCUMENT;

constructor() {}

  ngOnInit(): void {
  }

 

}
