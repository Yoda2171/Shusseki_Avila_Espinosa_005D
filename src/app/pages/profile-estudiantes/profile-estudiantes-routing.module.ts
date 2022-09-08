import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEstudiantesPage } from './profile-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEstudiantesPageRoutingModule {}
