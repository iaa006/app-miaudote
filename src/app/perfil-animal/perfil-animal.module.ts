import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAnimalPageRoutingModule } from './perfil-animal-routing.module';

import { PerfilAnimalPage } from './perfil-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAnimalPageRoutingModule
  ],
  declarations: [PerfilAnimalPage]
})
export class PerfilAnimalPageModule {}
