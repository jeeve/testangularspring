import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { GestionDepartementComponent } from './gestion-departement.component';


@NgModule({
  declarations: [
    GestionDepartementComponent
  ],
  imports: [
    CommonModule,
    GestionDepartementRoutingModule
  ]
})
export class GestionDepartementModule { }
