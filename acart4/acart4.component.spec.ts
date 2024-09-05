import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acart4Component } from './acart4.component';

describe('Acart4Component', () => {
  let component: Acart4Component;
  let fixture: ComponentFixture<Acart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acart4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
