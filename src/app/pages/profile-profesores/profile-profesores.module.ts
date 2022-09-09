import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileProfesoresPageRoutingModule } from './profile-profesores-routing.module';

import { ProfileProfesoresPage } from './profile-profesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileProfesoresPageRoutingModule
  ],
  declarations: [ProfileProfesoresPage]
})
export class ProfileProfesoresPageModule {}
