import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardRowComponent } from './award-row.component';

describe('AwardRowComponent', () => {
  let component: AwardRowComponent;
  let fixture: ComponentFixture<AwardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
