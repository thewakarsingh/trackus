import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './my_components/services/services.component';
import { TechnologiesComponent } from './my_components/technologies/technologies.component';
import { SetdataComponent } from './my_components/setdata/setdata.component';
import { login1bComponenet } from './my_components/login1b/login1b.component';
import { ReactiveFormComponent } from './my_components/reactive-form/reactive-form.component';
import { HomeComponent } from './my_components/home/home.component';
import { ArticleComponent } from './my_components/article/article.component';
import { MapComponent } from './my_components/map/map.component';
const routes: Routes = [
  
{path:'home', component:HomeComponent},
{path:'technologies',component:TechnologiesComponent},
{path:'login', component:SetdataComponent},
{path:'login1b', component:login1bComponenet},
{path:'loginReactive', component:ReactiveFormComponent},
{path:'loginReactive', component:ReactiveFormComponent},
{path: 'article', component:ArticleComponent},
{path: 'map', component:MapComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
