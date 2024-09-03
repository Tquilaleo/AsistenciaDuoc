import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienvenidoDocentePage } from './bienvenido-docente.page';

describe('BienvenidoDocentePage', () => {
  let component: BienvenidoDocentePage;
  let fixture: ComponentFixture<BienvenidoDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidoDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
