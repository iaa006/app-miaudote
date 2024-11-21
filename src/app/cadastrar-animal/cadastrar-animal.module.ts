import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarAnimalPageRoutingModule } from './cadastrar-animal-routing.module';

import { CadastrarAnimalPage } from './cadastrar-animal.page';

import { LucideAngularModule, User, Menu } from 'lucide-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarAnimalPageRoutingModule,
    LucideAngularModule.pick({User, Menu})

  ],
  declarations: [CadastrarAnimalPage]
})
export class CadastrarAnimalPageModule {}
