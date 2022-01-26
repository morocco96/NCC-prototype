import { Component, OnInit } from '@angular/core';
import { AWARDS } from 'src/modules/mock';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss']
})
export class AwardListComponent implements OnInit {
awards:Array<any> = AWARDS;
  constructor() { }
hasIcon:boolean = true;
alertSelected(){};
  ngOnInit(): void {
  }

}
