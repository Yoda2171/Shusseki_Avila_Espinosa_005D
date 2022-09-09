import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentarAlerta() {
    const alert = await this.alertController.create({
      message: `<img src="assets/icon/qr.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: [
        {
            text: 'CANCEL',
            role: 'false',
        },
        {
            text: 'CONFIRM',
            role: 'true',
        },
    ],
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha registrado la asistencia',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
