import { Component, OnInit } from '@angular/core';
import {AWARD_DOCUMENT } from 'src/modules/mock';

@Component({
  selector: 'app-award-document',
  templateUrl: './award-document.component.html',
  styleUrls: ['./award-document.component.scss']
})
export class AwardDocumentComponent implements OnInit {

  documents:Array<any> = AWARD_DOCUMENT;

  constructor() { }

  ngOnInit(): void {
  }

}
