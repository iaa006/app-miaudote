import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },  {
    path: 'perfil-animal',
    loadChildren: () => import('./perfil-animal/perfil-animal.module').then( m => m.PerfilAnimalPageModule)
  },
  {
    path: 'cadastrar-animal',
    loadChildren: () => import('./cadastrar-animal/cadastrar-animal.module').then( m => m.CadastrarAnimalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
