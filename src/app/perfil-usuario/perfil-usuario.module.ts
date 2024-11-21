import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUsuarioPageRoutingModule } from './perfil-usuario-routing.module';

import { PerfilUsuarioPage } from './perfil-usuario.page';

import { CircleCheck, ListFilter, LucideAngularModule, Mail, MapPin, Menu, Phone, X, User, TriangleAlert } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUsuarioPageRoutingModule,
    LucideAngularModule.pick({Menu, Phone, Mail, CircleCheck, MapPin, ListFilter, X, User, TriangleAlert})
  ],
  declarations: [PerfilUsuarioPage]
})
export class PerfilUsuarioPageModule {}
