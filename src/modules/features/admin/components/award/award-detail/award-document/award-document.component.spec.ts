import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardDocumentComponent } from './award-document.component';

describe('AwardDocumentComponent', () => {
  let component: AwardDocumentComponent;
  let fixture: ComponentFixture<AwardDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
