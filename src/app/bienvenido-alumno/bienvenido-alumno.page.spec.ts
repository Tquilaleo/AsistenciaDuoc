import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienvenidoAlumnoPage } from './bienvenido-alumno.page';

describe('BienvenidoAlumnoPage', () => {
  let component: BienvenidoAlumnoPage;
  let fixture: ComponentFixture<BienvenidoAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidoAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
