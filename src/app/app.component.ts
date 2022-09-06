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
      icon: 'pencil',
      name: 'Estudiantes',
      redirecTo: '/estudiantes',
    },
    {
      icon: 'person',
      name: 'Profesores',
      redirecTo: '/profesores',
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
  ];
  constructor() {}

}
