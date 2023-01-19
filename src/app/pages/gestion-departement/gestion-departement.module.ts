import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { GestionDepartementComponent } from './gestion-departement.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    GestionDepartementComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GestionDepartementRoutingModule
  ],
})
export class GestionDepartementModule { }
