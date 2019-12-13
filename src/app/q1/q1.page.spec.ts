import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1Page } from './q1.page';

describe('Q1Page', () => {
  let component: Q1Page;
  let fixture: ComponentFixture<Q1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
