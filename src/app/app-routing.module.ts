// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page', // Continua na nossa home-page
    pathMatch: 'full'
  },
  // Nossas páginas existentes
  {
    path: 'home-page',
    loadComponent: () => import('./pages/home-page/home-page.component').then( m => m.HomePageComponent)
  },
  {
    path: 'task-list',
    loadComponent: () => import('./pages/task-list/task-list.page').then( m => m.TaskListPage)
  },
  {
    path: 'about-page',
    loadComponent: () => import('./pages/about-page/about-page.component').then( m => m.AboutPageComponent)
  },

  // --- ROTAS DA PROVA (Etapa 2) ---
  {
    path: 'listar-contatos',
    loadComponent: () => import('./pages/listar-contatos/listar-contatos.component').then( m => m.ListarContatosComponent)
  },
  {
    path: 'adicionar-contato',
    loadComponent: () => import('./pages/adicionar-contato/adicionar-contato.component').then( m => m.AdicionarContatoComponent)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }