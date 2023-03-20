// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemppostdetailsComponent } from './demppostdetails/demppostdetails.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserpostdetailsComponent } from './userpostdetails/userpostdetails.component';
// import { UserdetailsComponent } from './userdetails.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { OrderlistComponent } from './FutureModule/product/orders/orderlist/orderlist.component';
import { BoysComponent } from './FutureModule/product/Fashion/fashion/boys/boys.component';
import { FashionComponent } from './FutureModule/product/Fashion/fashion/fashion/fashion.component';
import { GirlsComponent } from './FutureModule/product/Fashion/fashion/girls/girls.component';
import { KidComponent } from './FutureModule/product/Fashion/fashion/kid/kid.component';
import { CustomerListComponent } from './FutureModule/product/customer/customer-list/customer-list.component';
import { AdminListComponent } from './FutureModule/product/admin/admin-list/admin-list.component';
import { FirebasepostComponent } from './firebasepost/firebasepost.component';
import { TodoComponent } from './todo/todo.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { AuthGuard } from './auth.guard';
import { LiginformComponent } from './liginform/liginform.component';
import { HooksComponent } from './hooks/hooks.component';


// const routes: Routes = [
//   { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
//   { path: 'home', component: HomeComponent},
//   {path : 'aboutus', component : AboutusComponent},
//   {path : 'contactus', component : ContactusComponent},
//   {path : 'product' ,
//   children: [
//   {path:'', component: ProductComponent},
//   {path:'laptop', component: LaptopComponent},
//   {path:'mobile', component: MobileComponent},
//   {path:'camera', component: CameraComponent},
//   {path:'watch',component: WatchComponent} 
// ] 
// },
//   {path:'**',component:PagenotfoundComponent}
// ];

// const routes : Routes = [
//   {path : '', component : HomeComponent},
//   {path : 'home', component : HomeComponent},
//   {path : 'kids', component : KidComponent},
//   {path : 'girls', component : GirlsComponent},
//   {path : 'boys', component : BoysComponent},
//   {path : 'fashion', component : FashionComponent,
//   children : [
//     {path : 'kids' , component :KidComponent},
//     {path : 'girls', component : GirlsComponent},
//     {path : 'boys', component : BoysComponent},
//     {path : 'fashion', component : FashionComponent}
//   ]
// }
// ]

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  {path : 'aboutus', component : AboutusComponent},
  {path : 'contactus', component : ContactusComponent},
  {path : 'product' ,  canActivate :[AuthGuard] ,component: ProductComponent,
  children: [
 {path:'laptop', component: LaptopComponent},
  {path:'mobile', component: MobileComponent},
  {path:'camera', component: CameraComponent},
  {path:'watch',component: WatchComponent} 
] 
},
{path : 'login', component :LiginformComponent},
  {path : 'post', component:DemopostComponent},
  {path : 'postDetails/:id' , component : DemppostdetailsComponent },
  {path : 'user', component : UserpostComponent},
  {path : 'userDetails/:id', component : UserpostdetailsComponent},
  {path : 'userdetails' , component : UserdetailsComponent},
  // { path: 'userdetails', component: UserdetailsComponent},
  { path: 'login', component: TemplateformComponent},
  {path : 'order', component : OrderlistComponent},
  // {path : 'customer', component : CustomerListComponent},
  // {path : 'admin', component : AdminListComponent},
  {path : 'customer', loadChildren : './FutureModule/product/customer/customer.module#CustomerModule'},
  {path : 'admin', loadChildren : './FutureModule/product/admin/admin.module#AdminModule'},
  { path : 'firebase' , component : FirebasepostComponent},
  {path : 'todo' , component : TodoComponent},
  {path : 'customobs' , component : CustomobservableComponent},
  {path : 'hooks', component : HooksComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})], ***Preloading strategy
  exports: [RouterModule]
})
export class AppRoutingModule { }
