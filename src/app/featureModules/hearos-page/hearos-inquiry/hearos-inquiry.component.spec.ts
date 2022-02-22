import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearosInquiryComponent } from './hearos-inquiry.component';

describe('HearosInquiryComponent', () => {
  let component: HearosInquiryComponent;
  let fixture: ComponentFixture<HearosInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearosInquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearosInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
