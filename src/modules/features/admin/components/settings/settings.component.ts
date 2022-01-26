import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
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
