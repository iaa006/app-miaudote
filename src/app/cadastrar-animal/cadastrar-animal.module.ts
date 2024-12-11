import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarAnimalPageRoutingModule } from './cadastrar-animal-routing.module';

import { CadastrarAnimalPage } from './cadastrar-animal.page';

import { LucideAngularModule, User, Menu, ImagePlus, X, ArrowLeft, House, ArrowRight, ArrowUpRight, LogOut } from 'lucide-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarAnimalPageRoutingModule,
    LucideAngularModule.pick({User, Menu, ImagePlus, X, ArrowRight, ArrowUpRight, LogOut, House})

  ],
  declarations: [CadastrarAnimalPage]
})
export class CadastrarAnimalPageModule {}
