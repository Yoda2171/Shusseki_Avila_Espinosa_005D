import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeQRPageRoutingModule } from './code-qr-routing.module';

import { CodeQRPage } from './code-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeQRPageRoutingModule
  ],
  declarations: [CodeQRPage]
})
export class CodeQRPageModule {}
