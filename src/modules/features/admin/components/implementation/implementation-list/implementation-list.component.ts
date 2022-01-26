import { Component, OnInit } from '@angular/core';
import { IMPLEMENTATION } from 'src/modules/mock';
@Component({
  selector: 'app-implementation-list',
  templateUrl: './implementation-list.component.html',
  styleUrls: ['./implementation-list.component.scss']
})
export class ImplementationListComponent implements OnInit {

  implementation:Array<any> = IMPLEMENTATION;
  hasIcon:boolean = true;
  alertSelected(){}
  option ='0'
  constructor() { }

  ngOnInit(): void {
  }

}
