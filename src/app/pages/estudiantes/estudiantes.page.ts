import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  public myAngularxQrCode: string = null;
  public scannerqr: string;
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {

  }

  ngOnInit() {

  }

  async presentarAlerta() {
    this.myAngularxQrCode = 'Presente';
    this.scannerqr = this.myAngularxQrCode;
    const toast = await this.toastController.create({
      message: 'QR Generado',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
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
