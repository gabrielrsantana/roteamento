import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//importando o serviço automaticamente para o login component
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  senha: string = "";
  constructor(private auth:AuthService, private router:Router ) { }

  ngOnInit(): void {
  }
  //usar um servico para ver quando esta logado
  login() {
    //usa-se o serviço criado para o Login
    if(this.auth.login(this.email,this.senha)){
      this.router.navigate(["pagina-protegida"]);
      return 
    }
    alert("Login está inválido");
    this.email="";
    this.senha="";
  }
}
