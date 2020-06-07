import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinMapComponent } from './checkin-map.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CheckinMapComponent', () => {
  let component: CheckinMapComponent;
  let fixture: ComponentFixture<CheckinMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CheckinMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
