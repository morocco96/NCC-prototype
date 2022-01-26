import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotDocumentComponent } from './lot-document.component';

describe('LotDocumentComponent', () => {
  let component: LotDocumentComponent;
  let fixture: ComponentFixture<LotDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
