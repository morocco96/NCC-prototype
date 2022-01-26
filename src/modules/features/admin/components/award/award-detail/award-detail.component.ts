import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AWARD_FIELD } from 'src/modules/mock';

@Component({
  selector: 'app-award-detail',
  templateUrl: './award-detail.component.html',
  styleUrls: ['./award-detail.component.scss']
})
export class AwardDetailsComponent implements OnInit {

award_field:Array<any> = AWARD_FIELD;
  constructor() { }

  ngOnInit(){
    

  }

  

  

}
