import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Componente[] = [
    {
      icon: 'camera',
      name: 'Escanear QR',
      redirecTo: '/scan-qr',
    },
    {
      icon: 'qr-code',
      name: 'Code-QR',
      redirecTo: '/code-qr',
    },
    {
      icon: 'book',
      name: 'Cursos',
      redirecTo: '/cursos',
    },
    {
      icon: 'person-sharp',
      name: 'Profile-profesores',
      redirecTo: '/profile-profesores',
    },
    {
      icon: 'person-sharp',
      name: 'Profile-estudiantes',
      redirecTo: '/profile-estudiantes',
    },
    {
      icon: 'help',
      name: 'About-us',
      redirecTo: '/about-us',
    },
  ];
  constructor() {}

}
