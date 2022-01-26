import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planning-row',
  templateUrl: './planning-row.component.html',
  styleUrls: ['./planning-row.component.scss']
})
export class PlanningRowComponent implements OnInit {

  @Input() planning:any;
  @Output() onView = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
