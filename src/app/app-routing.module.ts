import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'rhome2', loadChildren: './rhome2/rhome2.module#Rhome2PageModule' },
  { path: 'fase1', loadChildren: './fase1/fase1.module#Fase1PageModule' },
  { path: 'licao1', loadChildren: './licao1/licao1.module#Licao1PageModule' },
  { path: 'q1', loadChildren: './q1/q1.module#Q1PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
