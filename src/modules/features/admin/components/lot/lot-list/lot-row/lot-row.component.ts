import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lot-row',
  templateUrl: './lot-row.component.html',
  styleUrls: ['./lot-row.component.scss']
})
export class LotRowComponent implements OnInit {
@Input() lot:any;
@Output() onView = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
