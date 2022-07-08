import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //token para SessionStorage site: jwt.io.
  //para aplicações reais o back-End que vai retornar esse token,mas aqui vamos usar esse
  accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  
  constructor() { }

  estaAutenticado(): boolean {
    //salva com nome de acess-token por padrao,usualmente 
    //sessionStorage.getItem("acess-token") retorna string mas colocamos !! para retornar booleano
    return !!sessionStorage.getItem("acess-token")
  }
  login(email: string, senha: string):boolean {
    if(email === "admin@admin.com.br" && senha === "123456"){
      sessionStorage.setItem("acess-token",this.accessToken);
      return true;
    }
    return false;
  }
  logout() {

    sessionStorage.clear();
  }

}
