import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase1Page } from './fase1.page';

describe('Fase1Page', () => {
  let component: Fase1Page;
  let fixture: ComponentFixture<Fase1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fase1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fase1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
