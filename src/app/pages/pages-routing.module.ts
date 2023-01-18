import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'departements',
        loadChildren: () =>
          import(
            './gestion-departement/gestion-departement-routing.module'
          ).then((m) => m.GestionDepartementRoutingModule),
      },
      {
        path: 'employes',
        loadChildren: () =>
          import(
            './gestion-employe/gestion-employe-routing.module'
          ).then((m) => m.GestionEmployeRoutingModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
