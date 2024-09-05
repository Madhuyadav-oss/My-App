import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acart1Component } from './acart1.component';

describe('Acart1Component', () => {
  let component: Acart1Component;
  let fixture: ComponentFixture<Acart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acart1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
