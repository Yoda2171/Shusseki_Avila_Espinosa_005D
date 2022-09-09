import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanQRPageRoutingModule } from './scan-qr-routing.module';

import { ScanQRPage } from './scan-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQRPageRoutingModule
  ],
  declarations: [ScanQRPage]
})
export class ScanQRPageModule {}
