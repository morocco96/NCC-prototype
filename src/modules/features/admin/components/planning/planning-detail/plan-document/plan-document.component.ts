import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from 'src/modules/mock';
@Component({
  selector: 'app-plan-document',
  templateUrl: './plan-document.component.html',
  styleUrls: ['./plan-document.component.scss']
})
export class PlanDocumentComponent implements OnInit {

  documents:Array<any> = DOCUMENT;
  constructor() { }

  ngOnInit(): void {
  }

}
