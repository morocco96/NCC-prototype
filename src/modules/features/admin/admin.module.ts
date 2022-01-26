import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, COMPONENT} from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HighlightDirective } from './directive/highlight.directive';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component'



const ENTRY_COMPONENTS: Array<any> = [

]



@NgModule({
  declarations: [...COMPONENT, HighlightDirective, ...ENTRY_COMPONENTS, ConfirmModalComponent,  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
