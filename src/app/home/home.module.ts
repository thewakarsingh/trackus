import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {AngularMaterialModule} from '../../material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

import { MatTabsModule } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import { SupportFunctions } from '../my_components/map/supportFiles';
import { AllowTrackingComponent } from './components/allow-tracking/allow-tracking.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AllowTrackingComponent,
    TrackerComponent,
    AddPersonComponent

    
  
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AngularMaterialModule,
    MatTabsModule



    
  ],
  providers: [DatePipe,SupportFunctions],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
