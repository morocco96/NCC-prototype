import { Component, OnInit } from '@angular/core';
import {SuiModal, ComponentModalConfig, ModalSize} from "@richardlt/ng2-semantic-ui"

interface IConfirmModalContext {
    title:string;
    question:string;
}

@Component({
  selector: 'app-confirm-modal',
  template: `
  <div class="header">{{ modal.context.title }}</div>
<div class="content">
   <div class="ui form">
   <div class="two fields">
   <div class=" required field">
    <label>First Name:</label>
    <input type="text" placeholder="firstname">
   </div>
   <div class=" required field">
   <label>Last Name:</label>
    <input type="text" placeholder="Lastname">
   </div>
   </div>

   </div>
</div>
<div class="actions">
    <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
    <button class="ui green button" (click)="modal.approve(undefined)" autofocus>OK</button>
</div>
  `,
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  constructor(public modal:SuiModal<IConfirmModalContext, void, void>) {}

  ngOnInit(): void {
  }

}


export class ConfirmModal extends ComponentModalConfig<IConfirmModalContext, void, void> {
  constructor(title:string, question:string, size = ModalSize.Small) {
      super(ConfirmModalComponent, { title, question });

      this.isClosable = false;
		this.transitionDuration = 900;
		this.size = size;
		this.isFullScreen = false;
		this.isInverted = false;
    this.mustScroll= false;
    this.transition = 'bounce up fade';
    
  }
}