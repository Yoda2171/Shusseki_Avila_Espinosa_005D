import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = {
    username: '',
    password: '',
    tipo:'',
  };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.usuario);
  }
}
