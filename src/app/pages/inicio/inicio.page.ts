import { Component, OnInit } from '@angular/core';
import { MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string;
  constructor(
    private menuController: MenuController,
    private navController: NavController,
  ) {
    this.getName();
  }

  ngOnInit() {
  }
  openMenu() {
    this.menuController.open('first');
  }

  async getName() {
    if (localStorage.getItem('INGRESADO PROFESOR')) {
      const item = JSON.parse(localStorage.getItem('INGRESADO PROFESOR'));

      this.username = item.nombre;
      return this.username;
    }
    if (localStorage.getItem('INGRESADO ESTUDIANTE')) {
      const item = JSON.parse(localStorage.getItem('INGRESADO ESTUDIANTE'));
      this.username = item.nombre;
      return this.username;
    }
  }
}
