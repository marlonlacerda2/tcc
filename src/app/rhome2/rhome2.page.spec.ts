import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rhome2Page } from './rhome2.page';

describe('Rhome2Page', () => {
  let component: Rhome2Page;
  let fixture: ComponentFixture<Rhome2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rhome2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rhome2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
