import { Component, OnInit } from '@angular/core';
import { PLANNING } from 'src/modules/mock';

import { ModalSize, SuiModalService } from '@richardlt/ng2-semantic-ui';
import { ConfirmModal } from 'src/modules/features/admin/modals';



@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit {
planning:Array<any> = PLANNING;

constructor(private modalService: SuiModalService) {}

  deleteModal() {
		this.modalService
			.open(
				new ConfirmModal(
					'Delete Project?',
					'Are you sure you want to delete this project plan?',
					ModalSize.Tiny
				)
			)
			.onApprove(() => {})
			.onDeny(() => {});
	}

viewPlanning(){}


  ngOnInit(): void {
  }

}
