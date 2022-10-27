import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'code-qr',
    loadChildren: () => import('./pages/code-qr/code-qr.module').then( m => m.CodeQRPageModule)
  },
  
  {
    path: 'scan-qr',
    loadChildren: () => import('./pages/scan-qr/scan-qr.module').then( m => m.ScanQRPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'profile-estudiantes',
    loadChildren: () => import('./pages/profile-estudiantes/profile-estudiantes.module').then( m => m.ProfileEstudiantesPageModule)
  },
  {
    path: 'profile-profesores',
    loadChildren: () => import('./pages/profile-profesores/profile-profesores.module').then( m => m.ProfileProfesoresPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pages/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
