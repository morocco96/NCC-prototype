import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-implementation-row',
  templateUrl: './implementation-row.component.html',
  styleUrls: ['./implementation-row.component.scss']
})
export class ImplementationRowComponent implements OnInit {

  @Input() advert:any;


  constructor() { }

  ngOnInit(): void {
  }

}
