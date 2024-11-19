import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { LucideAngularModule, ListFilter,CircleCheck, ArrowUpRight, ArrowRight, LogOut, Mail, MapPin, Menu, Phone, X } from 'lucide-angular';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LucideAngularModule.pick({ ListFilter, Menu, Phone, Mail, CircleCheck, MapPin,  X}),
    LucideAngularModule.pick({ ArrowUpRight }),
    LucideAngularModule.pick({ ArrowRight }),
    LucideAngularModule.pick({ LogOut }),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
