import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningRowComponent } from './planning-row.component';

describe('PlanningRowComponent', () => {
  let component: PlanningRowComponent;
  let fixture: ComponentFixture<PlanningRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
