import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-advertisement-row',
  templateUrl: './advertisement-row.component.html',
  styleUrls: ['./advertisement-row.component.scss']
})
export class AdvertisementRowComponent implements OnInit {

  @Input() advert:any;


  constructor() { }

  ngOnInit(): void {
  }

}
