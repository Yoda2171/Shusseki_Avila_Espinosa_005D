import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-estudiantes',
  templateUrl: './profile-estudiantes.page.html',
  styleUrls: ['./profile-estudiantes.page.scss'],
})
export class ProfileEstudiantesPage implements OnInit {
  user = { username: String, email: String, telefono: Number, tipo: String };
  constructor() {
    this.getUser();
  }

  ngOnInit() {}

  async getUser() {
    if (localStorage.getItem('INGRESADO PROFESOR')) {
      const item = JSON.parse(localStorage.getItem('INGRESADO PROFESOR'));
      console.log(item.nombre);
      this.user.username = item.nombre;
      this.user.email = item.correo;
      this.user.telefono = item.telefono;
      this.user.tipo = item.tipo;
      return this.user;
    }
    if (localStorage.getItem('INGRESADO ESTUDIANTE')) {
      const item = JSON.parse(localStorage.getItem('INGRESADO ESTUDIANTE'));
      this.user.username = item.nombre;
      this.user.email = item.correo;
      this.user.telefono = item.telefono;
      this.user.tipo = item.tipo;
      return this.user;
    }
  }
}
