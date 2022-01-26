import { Component, OnInit } from '@angular/core';
import { IMPLEMENTATION_FIELD } from 'src/modules/mock';
@Component({
  selector: 'app-implementation-detail',
  templateUrl: './implementation-detail.component.html',
  styleUrls: ['./implementation-detail.component.scss']
})
export class ImplementationDetailsComponent implements OnInit {

  implementation:Array<any> = IMPLEMENTATION_FIELD;
  
  constructor() { }

  ngOnInit(): void {
  }

}
