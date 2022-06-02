import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixComponent } from './mobile/netflix/netflix.component';
import { NavbarComponent } from './mobile/navbar/navbar.component';
import { FooterComponent } from './mobile/footer/footer.component';

import { RouterModule } from '@angular/router';
import { DetailComponent } from './mobile/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent,
    NavbarComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
