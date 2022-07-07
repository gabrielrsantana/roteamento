import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
    }
    );
       
    this.route.queryParamMap.subscribe(param => {
      this.idade = Number(param.get('idade'));
      this.nome = param.get('nome');
      })
  }

}
