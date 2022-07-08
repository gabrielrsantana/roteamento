import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  estaAutenticado(): boolean {
    //salva com nome de acess-token por padrao,usualmente 
    //sessionStorage.getItem("acess-token") retorna string mas colocamos !! para retornar booleano
    return !!sessionStorage.getItem("acess-token")
  }
  login(email: string, senha: string) {

  }
  logout() {

  }

}
