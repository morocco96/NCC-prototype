import { Component, OnInit } from '@angular/core';
import { PROJECT_FIELD } from 'src/modules/mock';
import { Location } from '@angular/common';
@Component({
  selector: 'app-planning-detail',
  templateUrl: './planning-detail.component.html',
  styleUrls: ['./planning-detail.component.scss']
})
export class PlanningDetailComponent implements OnInit {
project_field:Array<any>  = PROJECT_FIELD;
collapse:boolean = true;
goBack() {
  this.location.back();
}
  constructor(private location: Location) { }

  ngOnInit(): void {
  }


}
