import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acart2Component } from './acart2.component';

describe('Acart2Component', () => {
  let component: Acart2Component;
  let fixture: ComponentFixture<Acart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
