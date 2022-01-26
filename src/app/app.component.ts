import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-ncc';

  lists = [
    {
      name: 'Rose',
      rollNo: '1233',
      school: 'College'
    },
    {
      name: 'Sunday',
      rollNo: '1233',
      school: 'University'
    },
    {
      name: 'Tanko',
      rollNo: '1233',
      school: 'Polytechnic'
    },
    {
      name: 'Safiya',
      rollNo: '1233',
      school: 'College of Education'
    }
  ]
}
