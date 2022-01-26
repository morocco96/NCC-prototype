import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidDocumentComponent } from './bid-document.component';

describe('BidDocumentComponent', () => {
  let component: BidDocumentComponent;
  let fixture: ComponentFixture<BidDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
