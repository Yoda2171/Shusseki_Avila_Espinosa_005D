import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  tipo: string;
  constructor() {
    this.getTipo();
  }

  ngOnInit() {
    this.getTipo();
  }

  async getTipo() {
    if (localStorage.getItem('INGRESADO PROFESOR')) {
      this.tipo = 'Profesor';
      return this.tipo;
    } else if (localStorage.getItem('INGRESADO ESTUDIANTE')) {
      this.tipo = 'Estudiante';
      return this.tipo;
    }
  }
}
