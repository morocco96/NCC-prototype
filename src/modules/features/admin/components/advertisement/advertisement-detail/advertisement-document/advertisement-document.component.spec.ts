import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDocumentComponent } from './advertisement-document.component';

describe('AdvertisementDocumentComponent', () => {
  let component: AdvertisementDocumentComponent;
  let fixture: ComponentFixture<AdvertisementDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
