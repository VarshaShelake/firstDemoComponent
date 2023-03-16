import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RouterModule } from '@angular/router';
import { UtilitymoduleModule } from 'src/app/SharedCommonModule/utilitymodule/utilitymodule.module';



@NgModule({
  declarations: [
    OrderlistComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilitymoduleModule
  ]
})
export class OrdersModule { 
  constructor(){
    console.log('OrdersModule constructor called');
  }
}
