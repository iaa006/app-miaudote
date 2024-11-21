import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarAnimalPageRoutingModule } from './atualizar-animal-routing.module';

import { AtualizarAnimalPage } from './atualizar-animal.page';

import { CircleCheck, ListFilter, LucideAngularModule, Mail, MapPin, Menu, Phone, X, User, TriangleAlert, ImagePlus } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarAnimalPageRoutingModule,
    LucideAngularModule.pick({ Menu, Phone, Mail, CircleCheck, MapPin, ListFilter, X, User, TriangleAlert, ImagePlus })

  ],
  declarations: [AtualizarAnimalPage]
})
export class AtualizarAnimalPageModule {}
