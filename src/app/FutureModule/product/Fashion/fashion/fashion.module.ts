import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidComponent } from './kid/kid.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { HomeComponent } from './home/home.component';
import { PagenotavailableComponent } from './pagenotavailable/pagenotavailable.component';
import { FashionComponent } from './fashion/fashion.component';
import { RouterModule, Routes } from '@angular/router';
import { AppcomponentComponent } from './appcomponent/appcomponent.component';

const routes : Routes = [
  {path : '', component : HomeComponent},
  {path : 'kids', component : KidComponent},
  {path : 'girls', component : GirlsComponent},
  {path : 'boys', component : BoysComponent},
  {path : 'fashion', component : FashionComponent}
]


@NgModule({
  declarations: [
    KidComponent, 
    BoysComponent, 
    GirlsComponent, 
    HomeComponent, 
    PagenotavailableComponent,
    FashionComponent,
    AppcomponentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule 
  ],
  exports: [RouterModule]
})
export class FashionModule { }
