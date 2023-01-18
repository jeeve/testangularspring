import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeRoutingModule } from './gestion-employe-routing.module';
import { GestionEmployeComponent } from './gestion-employe.component';


@NgModule({
  declarations: [
    GestionEmployeComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeRoutingModule
  ]
})
export class GestionEmployeModule { }
