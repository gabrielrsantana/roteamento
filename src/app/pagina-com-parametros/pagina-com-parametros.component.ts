import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent implements OnInit {
  id: number | null = null;
  idade: number | null = null;
  nome: string | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // quando tiver acesso ao parametro da url traz o Observer,converte para numero e mostra no template
    this.route.paramMap.subscribe(
      params => { this.id = Number(params.get("id"))
      
      this.idade = Number(params.get("idade"))
      console.log(this.idade);
      this.nome = params.get("nome")
    }
    );
       
    // this.route.paramMap.subscribe(params => {
    //   this.idade = Number(params.get('idade'));
    //   this.nome = params.get('nome');
    //   console.log(this.nome);
    // })
  }

}
