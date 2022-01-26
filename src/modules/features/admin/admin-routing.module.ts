import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
   DashboardComponent,
   //Planning
   PlanningComponent,
   PlanningListComponent,
   PlanningRowComponent,
   PlanningDetailComponent,
   PlanDetailComponent,
   PlanDocumentComponent,

   
  //Lot 
  LotComponent, 
  LotListComponent, 
  LotRowComponent, 
  LotDetailComponent, 
  LotDetailsComponent,
  LotDocumentComponent,
  LotTenderComponent,
  LotAdvertComponent,
  LotAwardComponent,
  LotExecutionComponent,

  //Bidders
  BiddersComponent, 
  BiddersListComponent, 
  BidderRowComponent,
  BiddersDetailComponent,
  BidDetailComponent, 
  BidAwardComponent, 
  BidsComponent, 
  BidDocumentComponent,
   
  //Advertisement
  AdvertisementComponent,
  AdvertisementListComponent, 
  AdvertisementDetailsComponent,
  AdvertisementRowComponent, 
  AdvertisementDetailComponent,
  AdvertisementDocumentComponent ,

  //Award
  AwardComponent, 
  AwardListComponent,
  AwardRowComponent, 
  AwardDetailsComponent, 
  AwardDetailComponent,
  AwardDocumentComponent, 

  //Implementation
  ImplementationComponent,
  ImplementationListComponent,
  ImplementationRowComponent,
  ImplementationDetailComponent,
  ImplementationDetailsComponent,
  ImplementationPaymentComponent,
  ImplementationDocumentComponent,

  //Settings
  SettingsComponent

  
  } from './components';


export const COMPONENT:Array<any> = [
  DashboardComponent,
  
  //Planning
  PlanningComponent,
  PlanningListComponent,
  PlanningRowComponent,
  PlanningDetailComponent,
  PlanDetailComponent,
  PlanDocumentComponent,

  //Lot 
  LotComponent, 
  LotListComponent, 
  LotRowComponent, 
  LotDetailComponent, 
  LotDetailsComponent,
  LotDocumentComponent,
  LotTenderComponent,
  LotAdvertComponent,
  LotAwardComponent,
  LotExecutionComponent,

  
  //Bidders
  BiddersComponent, 
  BiddersListComponent, 
  BidderRowComponent,
  BiddersDetailComponent,
  BidDetailComponent, 
  BidAwardComponent, 
  BidsComponent, 
  BidDocumentComponent,

   //Advertisement
  AdvertisementComponent,
  AdvertisementListComponent, 
  AdvertisementDetailsComponent,
  AdvertisementRowComponent, 
  AdvertisementDetailComponent,
  AdvertisementDocumentComponent,

   //Award
   AwardComponent, 
   AwardListComponent,
   AwardRowComponent, 
   AwardDetailsComponent, 
   AwardDetailComponent,
   AwardDocumentComponent, 


    //Implementation
  ImplementationComponent,
  ImplementationListComponent,
  ImplementationRowComponent,
  ImplementationDetailComponent,
  ImplementationDetailsComponent,
  ImplementationPaymentComponent,
  ImplementationDocumentComponent,

  //Settings
  SettingsComponent
  
]
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  //Planning
  {
    path: 'planning',
    component: PlanningComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PlanningListComponent
      },
      {
        path: 'detail',
        component: PlanningDetailComponent,
        children: [
          {
            path: '',
            redirectTo: 'plan-detail',
            pathMatch: 'full'
          },
          {
            path: 'plan-detail',
            component: PlanDetailComponent
          },
          {
            path: 'plan-document',
            component: PlanDocumentComponent
          }
        ]
      }
    ]
  },

  //Lot
  {
    path: 'lot',
    component: LotComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: LotListComponent
      },
      {
        path: 'detail',
        component: LotDetailsComponent,
        children:[
          {
            path: '',
            redirectTo: 'lot-detail',
            pathMatch: 'full'
          },
          {
            path: 'lot-detail',
            component: LotDetailComponent
          },
          {
            path: 'lot-document',
            component: LotDocumentComponent
          },
          {
            path: 'lot-tender',
            component: LotTenderComponent
          },
          {
            path: 'lot-advert',
            component: LotAdvertComponent
          },
          {
            path: 'lot-award',
            component: LotAwardComponent
          },
          {
            path:'lot-execution',
            component: LotExecutionComponent
          }
        ]
      }
    ]
  },
  
  //Bidders
  {
    path: 'bidders',
    component: BiddersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BiddersListComponent
      },
      {
        path: 'show',
        component: BiddersDetailComponent
      }
    ]
  },

  //Advertisement
  {
    path: 'advertisement',
    component: AdvertisementComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list', 
        component: AdvertisementListComponent
      },
      {
        path: 'detail',
        component:  AdvertisementDetailsComponent,
        children: [
          {
            path: '',
            redirectTo: 'advert-detail',
           pathMatch: 'full',
          },
          {
            path: 'advert-detail',
            component: AdvertisementDetailComponent
          },
          {
            path: 'advert-document',
            component: AdvertisementDocumentComponent
          }
        ]
      }
    ]
  },
  
  //Award
  {
    path: 'award',
    component: AwardComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list', 
        component: AwardListComponent
      },
      {
        path: 'detail',
        component: AwardDetailsComponent,
        children: [
          {
            path: '',
            redirectTo: 'award-detail',
            pathMatch: 'full'
          },
          {
            path: 'award-detail',
            component: AwardDetailComponent
          },
          {
            path: 'award-document',
            component:AwardDocumentComponent
          }
        ]
      }
    ]
  },

  //Implementation
  {
    path: 'implementation',
    component: ImplementationComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ImplementationListComponent
      },
      {
        path: 'detail',
        component: ImplementationDetailsComponent,
        children: [
          {
            path: '',
            redirectTo: 'imp-detail',
            pathMatch: 'full'
          },
          {
            path: 'detail',
            component: ImplementationDetailComponent
          },
          {
            path: 'payment',
            component: ImplementationPaymentComponent
          },
          {
            path: 'document',
            component: ImplementationDocumentComponent
          }
        ]
      }
    ]
  },

  //Settings
  {
    path: 'settings',
    component: SettingsComponent
  }

  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
