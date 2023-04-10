import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CardComponent } from './card/card.component';
import { PasswordGenerationComponent } from './password-generation/password-generation.component';
import { ChildToParentOutputDirComponent } from './child-to-parent-output-dir/child-to-parent-output-dir.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CountryassignComponent } from './countryassign/countryassign.component';
import { NgswitchassignComponent } from './ngswitchassign/ngswitchassign.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//angular material
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { TemplateformComponent } from './templateform/templateform.component';
// // import { MatSlideToggleModule } from '@angular/material';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TemplateformComponent } from './templateform/templateform.component';
import { EmpregistrationformComponent } from './empregistrationform/empregistrationform.component';
import { NgstyleclassassignComponent } from './ngstyleclassassign/ngstyleclassassign.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedrivenassignComponent } from './templatedrivenassign/templatedrivenassign.component';
import { ReactiveformassignComponent } from './reactiveformassign/reactiveformassign.component';
import { Reactiveformassign2Component } from './reactiveformassign2/reactiveformassign2.component';
import { PipeexamplesComponent } from './pipeexamples/pipeexamples.component';

import { CustomComponent } from './custom/custom.component';
import { CombinedReactiveformComponent } from './combined-reactiveform/combined-reactiveform.component';
// import { HttpClientModule } from '@angular/common/http';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { ServicepracticeComponent } from './servicepractice/servicepractice.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Commucomp1Component } from './commucomp1/commucomp1.component';
import { Commucomp2Component } from './commucomp2/commucomp2.component';
import { Commucomp3Component } from './commucomp3/commucomp3.component';
import { Commucomp4Component } from './commucomp4/commucomp4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { ProductComponent } from './product/product.component';
// import { LaptopComponent } from './product/laptop/laptop.component';
// import { MobileComponent } from './product/mobile/mobile.component';
// import { CameraComponent } from './product/camera/camera.component';
// import { WatchComponent } from './product/watch/watch.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemppostdetailsComponent } from './demppostdetails/demppostdetails.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserpostdetailsComponent } from './userpostdetails/userpostdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductModule } from './FutureModule/product/product.module';
import { OrdersModule } from './FutureModule/product/orders/orders.module';
import { FashionModule } from './FutureModule/product/Fashion/fashion/fashion.module';
import { AdminModule } from './FutureModule/product/admin/admin.module';
import { CustomerModule } from './FutureModule/product/customer/customer.module';
import { FirebasepostComponent } from './firebasepost/firebasepost.component';
import { TodoComponent } from './todo/todo.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { LiginformComponent } from './liginform/liginform.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HooksComponent } from './hooks/hooks.component';
import { HooklifecyComponent } from './hooklifecy/hooklifecy.component';
import { WikiComponent } from './wiki/wiki.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ResolveguarduserComponent } from './resolveguarduser/resolveguarduser.component';
import { RxjsComponent } from './rxjs/rxjs.component';
// import { User } from './models/user.ts/user.ts.component';






@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    DataBindingComponent,
    CardComponent,
    PasswordGenerationComponent,
    ChildToParentOutputDirComponent,
    NgForComponent,
    NgIfComponent,
    NgswitchComponent,
    CountryassignComponent,
    NgswitchassignComponent,
    NgstyleComponent,
    NgclassComponent,
    // CustomDirective,
    TemplateformComponent,
    EmpregistrationformComponent,
    NgstyleclassassignComponent,
    ReactiveformsComponent,
    TemplatedrivenassignComponent,
    ReactiveformassignComponent,
    Reactiveformassign2Component,
    PipeexamplesComponent,
    
    CustomComponent,
    CombinedReactiveformComponent,
    CustomPipe,
    SearchPipe,
    ProductfilterComponent,
    ServicepracticeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Commucomp1Component,
    Commucomp2Component,
    Commucomp3Component,
    Commucomp4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    // ProductComponent,
    // LaptopComponent,
    // MobileComponent,
    // CameraComponent,
    // WatchComponent,
    DemopostComponent,
    DemppostdetailsComponent,
    UserpostComponent,
    UserpostdetailsComponent,
    UserdetailsComponent,
    FirebasepostComponent,
    TodoComponent,
    CustomobservableComponent,
    LiginformComponent,
    HooksComponent,
    HooklifecyComponent,
    WikiComponent,
    AdduserComponent,
    ResolveguarduserComponent,
    RxjsComponent
    // User.TsComponent,
     

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    OrdersModule,
    FashionModule,
    
  

  ],
  // providers: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('AppModule constructor called');
  }
 
}
