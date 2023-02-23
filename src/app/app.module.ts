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
import {MatButtonModule} from '@angular/material/button'
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
    CustomDirective,
    TemplateformComponent,
    EmpregistrationformComponent,
    NgstyleclassassignComponent,
    ReactiveformsComponent,
    TemplatedrivenassignComponent,
    ReactiveformassignComponent,    

    
    
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
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
