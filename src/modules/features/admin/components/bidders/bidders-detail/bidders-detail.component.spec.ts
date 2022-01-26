import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddersDetailComponent } from './bidders-detail.component';

describe('BiddersDetailComponent', () => {
  let component: BiddersDetailComponent;
  let fixture: ComponentFixture<BiddersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
