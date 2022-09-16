import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllowTrackingComponent } from './components/allow-tracking/allow-tracking.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AppComponent } from '../app.component';
const routes: Routes = [

// {path: 'home', component:HomeComponent,
//     children:[{path:'addperson',component:AddPersonComponent}]},


// {path: 'header', component:HeaderComponent,
//     children:[{path:'tracker',component:TrackerComponent}]},

// {path: 'app', component:AppComponent},

// {path: 'home', component:HomeComponent},

// {path: 'home', component:HomeComponent,
//     children:[{path:'track',component:AllowTrackingComponent}]},


// {path: 'home', component:HomeComponent,
//     children:[{path:'tracker',component:TrackerComponent}]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
