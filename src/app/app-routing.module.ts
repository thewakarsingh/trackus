
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './my_components/header/header.component';
import { AddPersonComponent } from './my_components/add-person/add-person.component';
import { AllowTrackingComponent } from './my_components/allow-tracking/allow-tracking.component';

import { RegistrationComponent } from './my_components/registration/registration.component';
import { TrackerComponent } from './my_components/tracker/tracker.component';

const routes: Routes = [
  
{path:'', component:RegistrationComponent},
{path:'login', component:RegistrationComponent, },
{path:'home', component:HeaderComponent , },
{path:'header', component:HeaderComponent , },
{path:'tracker', component:TrackerComponent , },
{path:'homea/tracker', component:TrackerComponent , },


{path: 'home', component:HeaderComponent,
    children:[{path:'addperson',component:AddPersonComponent}]},

    {path: 'home', component:HeaderComponent,
    children:[{path:'track',component:AllowTrackingComponent}]},

{path: 'home', component:HeaderComponent,
    children:[{path:'tracker',component:TrackerComponent}]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
