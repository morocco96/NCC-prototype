import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAwardComponent } from './bid-award.component';

describe('BidAwardComponent', () => {
  let component: BidAwardComponent;
  let fixture: ComponentFixture<BidAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
