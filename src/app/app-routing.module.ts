import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './my_components/home/home.component';
import { MapComponent } from './my_components/map/map.component';
import { RegistrationComponent } from './my_components/registration/registration.component';
const routes: Routes = [
  
{path:'', component:RegistrationComponent},
{path: 'map', component:MapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
