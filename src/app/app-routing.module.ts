import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
//import { CommonModule } from '@angular/common';

const routes: Routes =[
{  path:"primeira-pagina",component: PrimeiraPaginaComponent },
{ path:"segunda-pagina",component: SegundaPaginaComponent },
{  path:"", redirectTo :"primeira-pagina", pathMatch: "full"  },
{  path:"pagina-com-parametros/:id", component:PaginaComParametrosComponent },
//ng g module lazy-loading --route=lazy-loading --module=app
{ path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
{ path:'pagina-protegida', component: PaginaProtegidaComponent, canActivate:[AuthGuard]},
{ path:"**", component: PaginaNaoEncontradaComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
