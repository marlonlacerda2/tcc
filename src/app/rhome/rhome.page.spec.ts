import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhomePage } from './rhome.page';

describe('RhomePage', () => {
  let component: RhomePage;
  let fixture: ComponentFixture<RhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
