import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUsuarioPageRoutingModule } from './perfil-usuario-routing.module';

import { PerfilUsuarioPage } from './perfil-usuario.page';

import { House, ArrowRight, ArrowUpRight, CircleCheck, ListFilter, LogOut, LucideAngularModule, Mail, MapPin, Menu, Phone, X } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUsuarioPageRoutingModule,
    LucideAngularModule.pick({House,ArrowRight, ArrowUpRight, LogOut, Menu, Phone, Mail, CircleCheck, MapPin, ListFilter, X})
  ],
  declarations: [PerfilUsuarioPage]
})
export class PerfilUsuarioPageModule {}
