import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { Usuario } from 'src/app/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  usuario: Usuario[] = [];

  constructor(
    private alercontroller: AlertController,
    private navController: NavController,
    private registroService: RegisterServiceService,
    private formBuilder: FormBuilder
  ) {
    this.formularioLogin = this.formBuilder.group({
      tipoCuenta: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
  async ingresar() {
    const formulario = this.formularioLogin.value;
    let a = 0;
    if (formulario.tipoCuenta === 'Estudiante') {
      this.registroService.getEstudiantes().then(datos =>{
        this.usuario=datos;
        if(datos.length===0){
          return null;
        }
        for(const item of this.usuario){
          if(item.correo===formulario.correo && item.password === formulario.password){
            a=1;
            localStorage.setItem('INGRESADO ESTUDIANTE',JSON.stringify(item));
            this.navController.navigateRoot('inicio');
          }
          if(a===0){
            this.alertMSG();
          }
        }
      });
    }
    if (formulario.tipoCuenta === 'Profesor') {
      this.registroService.getProfesores().then(datos =>{
        this.usuario=datos;
        if(datos.length===0){
          return null;
        }
        for(const item of this.usuario){
          if(item.correo===formulario.correo && item.password === formulario.password){
            a=1;
            localStorage.setItem('INGRESADO PROFESOR',JSON.stringify(item));
            this.navController.navigateRoot('inicio');
          }
          if(a===0){
            this.alertMSG();
          }
        }
      });
    }
    if(a===0){
      this.alertMSG();
    }
  }

  async alertMSG() {
    const alert = await this.alercontroller.create({
      header: 'ERROR...',
      message: 'Ingrese los datos correctamente',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }
}
