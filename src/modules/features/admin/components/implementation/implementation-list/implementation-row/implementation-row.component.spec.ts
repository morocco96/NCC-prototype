import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementRowComponent } from './advertisement-row.component';

describe('AdvertisementRowComponent', () => {
  let component: AdvertisementRowComponent;
  let fixture: ComponentFixture<AdvertisementRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
