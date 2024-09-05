import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acart3Component } from './acart3.component';

describe('Acart3Component', () => {
  let component: Acart3Component;
  let fixture: ComponentFixture<Acart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acart3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
