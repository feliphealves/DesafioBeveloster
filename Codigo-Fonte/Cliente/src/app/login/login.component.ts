import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = { login: '', senha: '' };
  radio : number = 0;
  senha2: string;


  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private userService: UsuarioService,
    ) { }


  ngOnInit() {
    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() !== null) {
        var str = atob(localStorage.getItem("token").split(".")[1]);
        this.router.navigate(['home-doador']);
    }
  }


  public logar() {
    this.loginService.login(this.user);
  }


  novo() {
    this.user = { login: '', senha: '' };
  }


  radio1clicado(){
      this.radio=1;
    }
    radio2clicado(){
     this.radio=2;
   }

  

}
