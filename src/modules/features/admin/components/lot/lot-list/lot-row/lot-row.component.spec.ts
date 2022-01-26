import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotRowComponent } from './lot-row.component';

describe('LotRowComponent', () => {
  let component: LotRowComponent;
  let fixture: ComponentFixture<LotRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
