import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoEstudianteGuard } from './guard/ingresado-estudiante.guard';
import { IngresadoprofesorGuard } from './guard/ingresadoprofesor.guard';
import { IngresoAmbosGuard } from './guard/ingreso-ambos.guard';
import { NoIngresadoGuard } from './guard/no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
    canActivate: [NoIngresadoGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [NoIngresadoGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
    canActivate: [NoIngresadoGuard],
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((m) => m.CursosPageModule),
    canActivate: [IngresoAmbosGuard],
  },
  {
    path: 'estudiantes',
    loadChildren: () =>
      import('./pages/estudiantes/estudiantes.module').then(
        (m) => m.EstudiantesPageModule
      ),
    canActivate: [IngresadoprofesorGuard],
  },
  {
    path: 'code-qr',
    loadChildren: () =>
      import('./pages/code-qr/code-qr.module').then((m) => m.CodeQRPageModule),
    canActivate: [IngresadoEstudianteGuard],
  },
  {
    path: 'scan-qr',
    loadChildren: () =>
      import('./pages/scan-qr/scan-qr.module').then((m) => m.ScanQRPageModule),
    canActivate: [IngresadoEstudianteGuard],
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then(
        (m) => m.AboutUsPageModule
      ),
    canActivate: [IngresoAmbosGuard],
  },
  {
    path: 'profile-estudiantes',
    loadChildren: () =>
      import('./pages/profile-estudiantes/profile-estudiantes.module').then(
        (m) => m.ProfileEstudiantesPageModule
      ),
    canActivate: [IngresoAmbosGuard],
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
    canActivate: [IngresoAmbosGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
