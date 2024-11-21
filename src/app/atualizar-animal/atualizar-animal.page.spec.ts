import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizarAnimalPage } from './atualizar-animal.page';

describe('AtualizarAnimalPage', () => {
  let component: AtualizarAnimalPage;
  let fixture: ComponentFixture<AtualizarAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
