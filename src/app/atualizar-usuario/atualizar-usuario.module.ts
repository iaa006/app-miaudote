import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarUsuarioPageRoutingModule } from './atualizar-usuario-routing.module';

import { CircleCheck, ListFilter, LucideAngularModule, Mail, MapPin, Menu, Phone, X, User, TriangleAlert, ImagePlus } from 'lucide-angular';

import { AtualizarUsuarioPage } from './atualizar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarUsuarioPageRoutingModule,
    LucideAngularModule.pick({ Menu, Phone, Mail, CircleCheck, MapPin, ListFilter, X, User, TriangleAlert, ImagePlus })
  ],
  declarations: [AtualizarUsuarioPage]
})
export class AtualizarUsuarioPageModule { }
