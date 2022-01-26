import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuiModule} from '@richardlt/ng2-semantic-ui';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    SuiModule,
    FlexLayoutModule,
  ],
  exports: [
    SuiModule,
    FlexLayoutModule,]
})
export class SharedModule { }
