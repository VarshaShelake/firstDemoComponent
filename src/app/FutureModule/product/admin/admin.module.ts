import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AadminrouterRoutingModule } from './aadminrouter-routing.module';



@NgModule({
  declarations: [AdminListComponent],
  imports: [
    CommonModule,
    AadminrouterRoutingModule
  ]
})
export class AdminModule {
  constructor(){
    console.log('AdminModule constructor called');
  }
 }
