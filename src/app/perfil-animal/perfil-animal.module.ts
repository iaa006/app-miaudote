import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { House, LucideAngularModule, ArrowUpRight, ArrowRight, LogOut, Phone, Mail, CircleCheck, MapPin, TriangleAlert, PawPrint, X} from 'lucide-angular';


import { IonicModule } from '@ionic/angular';

import { PerfilAnimalPageRoutingModule } from './perfil-animal-routing.module';

import { PerfilAnimalPage } from './perfil-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAnimalPageRoutingModule,
    LucideAngularModule.pick({ House, ArrowRight, ArrowUpRight, LogOut, Phone, Mail, CircleCheck, MapPin, TriangleAlert, PawPrint, X}),


  ],
  declarations: [PerfilAnimalPage]
})
export class PerfilAnimalPageModule {}
