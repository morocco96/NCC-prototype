import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderRowComponent } from './bidder-row.component';

describe('BidderRowComponent', () => {
  let component: BidderRowComponent;
  let fixture: ComponentFixture<BidderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
