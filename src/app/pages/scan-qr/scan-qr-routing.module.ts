import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanQRPage } from './scan-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ScanQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanQRPageRoutingModule {}
