import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByMeComponent } from './my_components/by-me/by-me.component';
import { HeaderComponent } from './my_components/header/header.component';
import { CarouselComponent } from './my_components/carousel/carousel.component';
import { FooterComponent } from './my_components/footer/footer.component';
import { ServicesComponent } from './my_components/services/services.component';
import { NavbarComponent } from './my_components/navbar/navbar.component';
import { TechnologiesComponent } from './my_components/technologies/technologies.component';
import { SetdataComponent } from './my_components/setdata/setdata.component';
import { login1bComponenet } from './my_components/login1b/login1b.component';
import { ReactiveFormComponent } from './my_components/reactive-form/reactive-form.component';
import { HomeComponent } from './my_components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
//import { MatProgressbarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { ArticleComponent } from './my_components/article/article.component';
import { NgxsModule } from '@ngxs/store';
import { MapComponent } from './my_components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ByMeComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    ServicesComponent,
    NavbarComponent,
    TechnologiesComponent,
    SetdataComponent,
    login1bComponenet,
    ReactiveFormComponent,
    HomeComponent,
    ArticleComponent,
    NavbarComponent,
    MapComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule
 //   MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
