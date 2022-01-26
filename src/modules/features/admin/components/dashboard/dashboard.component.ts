import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
projectAwards:Array<any> = [
  {
    id: '031682436',
    name: 'Purchase of Office Supplies',
    projectID: '89168463',
    createdBy: 'Gbenga Durotimo',
    dateCreated: '17 Oct, 2020',
    amount: '200,000,000'
  },
  {
    id: '031682436',
    name: 'Purchase of Office Supplies',
    projectID: '89168463',
    createdBy: 'Gbenga Durotimo',
    dateCreated: '17 Oct, 2020',
    amount: '200,000,000'
  },
  {
    id: '031682436',
    name: 'Purchase of Office Supplies',
    projectID: '89168463',
    createdBy: 'Gbenga Durotimo',
    dateCreated: '17 Oct, 2020',
    amount: '200,000,000'
  },
  {
    id: '031682436',
    name: 'Purchase of Office Supplies',
    projectID: '89168463',
    createdBy: 'Gbenga Durotimo',
    dateCreated: '17 Oct, 2020',
    amount: '200,000,000'
  },
  {
    id: '031682436',
    name: 'Purchase of Office Supplies',
    projectID: '89168463',
    createdBy: 'Gbenga Durotimo',
    dateCreated: '17 Oct, 2020',
    amount: '200,000,000'
  },
  {
    id: '031682436',
    name: 'Purchase of Office Supplies',
    projectID: '89168463',
    createdBy: 'Gbenga Durotimo',
    dateCreated: '17 Oct, 2020',
    amount: '200,000,000'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
