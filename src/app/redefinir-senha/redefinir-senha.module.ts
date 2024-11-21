import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, User, ArrowLeft, ArrowRight, Lock} from 'lucide-angular';

import { IonicModule } from '@ionic/angular';

import { RedefinirSenhaPageRoutingModule } from './redefinir-senha-routing.module';

import { RedefinirSenhaPage } from './redefinir-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefinirSenhaPageRoutingModule,
    LucideAngularModule.pick({ User, ArrowLeft, ArrowRight, Lock })
  ],
  declarations: [RedefinirSenhaPage]
})
export class RedefinirSenhaPageModule {}
