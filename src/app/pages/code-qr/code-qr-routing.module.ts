import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeQRPage } from './code-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CodeQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeQRPageRoutingModule {}
