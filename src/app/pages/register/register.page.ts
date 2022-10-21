import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  

  formularioRegistro:FormGroup;
  newUsuaio:Usuario=<Usuario>{};
  public usuario: Usuario[];

  constructor(
    private registerService: RegisterServiceService,
    private alertController:AlertController,
    private toastController:ToastController,
    private formBuilder: FormBuilder,
    
  ) {
    this.formularioRegistro= this.formBuilder.group({
      'username': new FormControl("", Validators.required),
      'password':new FormControl("", Validators.required),
      'email':new FormControl("", Validators.required),
      'number':new FormControl("", Validators.required),
      'tipo':new FormControl("", Validators.required),

    })
  }

  ngOnInit() {}

  async crearUsuario(){
    let form  = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: "Datos incorrectos",
        message:'Debe completar todos los campos',
        buttons:['Aceptar'],
      })

      await alert.present();
      return;
    }

    this.newUsuaio.correo=form.email,
    this.newUsuaio.nombre=form.username,
    this.newUsuaio.password=form.password,
    this.newUsuaio.telefono=form.number,
    this.newUsuaio.tipo=form.tipo,
    this.registerService.addDatos(this.newUsuaio).then(dato =>{
      this.newUsuaio=<Usuario>{};
      this.showToast('Dato agregados');
    });
  }


  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000
    });
    toast.present();
  }


  onSubmit() {
    console.log(this.usuario);
  }
}
