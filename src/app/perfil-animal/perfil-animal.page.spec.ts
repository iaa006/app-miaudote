import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilAnimalPage } from './perfil-animal.page';

describe('PerfilAnimalPage', () => {
  let component: PerfilAnimalPage;
  let fixture: ComponentFixture<PerfilAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
