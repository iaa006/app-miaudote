import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAnimalPage } from './perfil-animal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilAnimalPageRoutingModule {}
