import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEstudiantesPageRoutingModule } from './profile-estudiantes-routing.module';

import { ProfileEstudiantesPage } from './profile-estudiantes.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEstudiantesPageRoutingModule
  ],
  declarations: [ProfileEstudiantesPage]
})
export class ProfileEstudiantesPageModule {}
