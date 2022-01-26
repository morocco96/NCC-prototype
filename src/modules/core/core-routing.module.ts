import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AdminLayoutComponent } from './components';

const routes: Routes = [
{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren:() => import( '../features/admin/admin.module').then(m => m.AdminModule)
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
