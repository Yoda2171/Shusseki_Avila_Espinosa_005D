import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileProfesoresPage } from './profile-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileProfesoresPageRoutingModule {}
