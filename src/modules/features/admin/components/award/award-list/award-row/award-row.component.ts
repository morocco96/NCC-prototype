import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-award-row',
  templateUrl: './award-row.component.html',
  styleUrls: ['./award-row.component.scss']
})
export class AwardRowComponent implements OnInit {
@Input() award:any;
  constructor() { }

  ngOnInit(): void {
  }

}
