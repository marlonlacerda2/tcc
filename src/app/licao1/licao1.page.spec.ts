import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Licao1Page } from './licao1.page';

describe('Licao1Page', () => {
  let component: Licao1Page;
  let fixture: ComponentFixture<Licao1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Licao1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Licao1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
