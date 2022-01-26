import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BIDDERS_FIELD } from 'src/modules/mock';
import { ModalSize, SuiModalService } from 'ng2-semantic-ui';

@Component({
  selector: 'app-bidders-detail',
  templateUrl: './bidders-detail.component.html',
  styleUrls: ['./bidders-detail.component.scss']
})
export class BiddersDetailComponent implements OnInit {
 bidders_field:Array<any> = BIDDERS_FIELD;
  constructor(private modalService: SuiModalService,
              private location: Location,
              private modalSize: ModalSize
    ) { }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
  }



}
