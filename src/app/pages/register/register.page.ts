import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario = {
    username: '',
    email: '',
    password: '',
    phonenumber:'',
    tipo:'',
  };
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.usuario);
  }
}
