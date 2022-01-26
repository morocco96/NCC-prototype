import { Component, OnInit } from '@angular/core';
import { PAYMENT } from 'src/modules/mock';

@Component({
  selector: 'app-implementation-payment',
  templateUrl: './implementation-payment.component.html',
  styleUrls: ['./implementation-payment.component.scss']
})
export class ImplementationPaymentComponent implements OnInit {
payment:Array<any> = PAYMENT;

constructor() {}

  ngOnInit(): void {
    
  }

 

}
