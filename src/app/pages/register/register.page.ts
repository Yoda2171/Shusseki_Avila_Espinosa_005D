import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { AlertController, IonItem, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuario: Usuario[] = [];

  constructor(
    private registerService: RegisterServiceService,
    private alertController: AlertController,
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) {
    this.formularioRegistro = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
    });
  }

  ngOnInit() { }

  async crearUsuario() {
    const form = this.formularioRegistro.value;
    let a = 0;

    this.newUsuario.correo = form.email;
    this.newUsuario.nombre = form.username;
    this.newUsuario.password = form.password;
    this.newUsuario.telefono = form.telefono;
    this.newUsuario.tipo = form.tipo;

    if (form.tipo === 'Estudiante') {
      this.registerService.getEstudiantes().then((datos) => {
        this.usuario = datos;
        if (datos !== null) {
          const igualoCorreo = this.usuario.find((user) => form.email === user.correo);
          if (!igualoCorreo) {
            this.registerService.addEstudiante(this.newUsuario).then((dato) => {
              this.newUsuario = <Usuario>{};
              this.showToast('Dato agregados');
              this.formularioRegistro.reset();
            });
          } else {
            this.alertaError();
          }

        } else {
          this.registerService.addEstudiante(this.newUsuario).then((dato) => {
            this.newUsuario = <Usuario>{};
            this.showToast('Dato agregados');
            this.formularioRegistro.reset();
          });
        }



      });
    }

    if (form.tipo === 'Profesor') {
      this.registerService.getProfesores().then((datos) => {
        this.usuario = datos;
        if (datos !== null) {
          const igualoCorreo = this.usuario.find((user) => form.email === user.correo);
          if (!igualoCorreo) {
            this.registerService.addProfesores(this.newUsuario).then((dato) => {
              this.newUsuario = <Usuario>{};
              this.showToast('Dato agregados');
              this.formularioRegistro.reset();
            });
          } else {
            this.alertaError();
          }
        } else {
          this.registerService.addProfesores(this.newUsuario).then((dato) => {
            this.newUsuario = <Usuario>{};
            this.showToast('Dato agregados');
            this.formularioRegistro.reset();
          });
        }


      });
    }

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Debe completar todos los campos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  async alertaError() {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Usuario Ya Existente',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }
  onSubmit() {
    console.log(this.usuario);
  }
}
