import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from 'src/app/product/camera/camera.component';
import { LaptopComponent } from 'src/app/product/laptop/laptop.component';
import { MobileComponent } from 'src/app/product/mobile/mobile.component';
import { ProductComponent } from 'src/app/product/product.component';
import { WatchComponent } from 'src/app/product/watch/watch.component';
import { RouterModule } from '@angular/router';
import { UtilitymoduleModule } from 'src/app/SharedCommonModule/utilitymodule/utilitymodule.module';

// import { CustomDirective } from 'src/app/custome.directive';



@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    CameraComponent,
    WatchComponent,
   
    // CustomDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilitymoduleModule
    
  ],
  exports : [
    
  ]
})
export class ProductModule { 
  constructor(){
    console.log('ProductModule constructor called');
  }
}
