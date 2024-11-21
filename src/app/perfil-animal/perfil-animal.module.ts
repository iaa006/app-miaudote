import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LucideAngularModule, ArrowUpRight, ArrowRight, LogOut, Phone, Mail, CircleCheck, MapPin} from 'lucide-angular';


import { IonicModule } from '@ionic/angular';

import { PerfilAnimalPageRoutingModule } from './perfil-animal-routing.module';

import { PerfilAnimalPage } from './perfil-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAnimalPageRoutingModule,
    LucideAngularModule.pick({ ArrowRight, ArrowUpRight, LogOut, Phone, Mail, CircleCheck, MapPin}),


  ],
  declarations: [PerfilAnimalPage]
})
export class PerfilAnimalPageModule {}
