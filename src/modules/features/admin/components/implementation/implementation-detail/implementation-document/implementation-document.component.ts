import { Component, OnInit } from '@angular/core';
import { IMPLEMENT_DOCUMENT } from 'src/modules/mock';

@Component({
  selector: 'app-implementation-document',
  templateUrl: './implementation-document.component.html',
  styleUrls: ['./implementation-document.component.scss']
})
export class ImplementationDocumentComponent implements OnInit {
adverts:Array<any> = IMPLEMENT_DOCUMENT;

constructor() {}

  ngOnInit(): void {
  }

 

}
