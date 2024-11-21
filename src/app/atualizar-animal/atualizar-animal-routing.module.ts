import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarAnimalPage } from './atualizar-animal.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarAnimalPageRoutingModule {}
