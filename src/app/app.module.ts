import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {AngularMaterialModule} from '../material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './my_components/header/header.component';
import { HomeComponent } from './my_components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
//import { NgxsModule } from '@ngxs/store';
import { MapComponent } from './my_components/map/map.component';
import { MatComponent } from './my_components/mat/mat.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import { SupportFunctions } from './my_components/map/supportFiles';
import { RegistrationComponent } from './my_components/registration/registration.component';
//import { LoginComponent } from './my_components/login/login.component';
//import { RegisterComponent } from './my_components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    MatComponent,
    RegistrationComponent,
 //   LoginComponent,
  //  RegisterComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AngularMaterialModule,
    MatTabsModule



    
  ],
  providers: [DatePipe,SupportFunctions],
  bootstrap: [AppComponent]
})
export class AppModule { }
