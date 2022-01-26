import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent,
         SidebarComponent,
         AdminLayoutComponent
          } from './components';

const COMPONENT:Array<any> = [
  HeaderComponent,
  SidebarComponent,
  AdminLayoutComponent
]
@NgModule({
  declarations: [...COMPONENT],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
