import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ChartModule } from 'angular-highcharts';
import { FlexLayoutModule } from '@angular/flex-layout';
 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VisionComponent } from './vision/vision.component';
import { FooterComponent } from './footer/footer.component';
// import { MarketComponent } from './market/market.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    VisionComponent,
    FooterComponent,
    // MarketComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    InViewportModule,
    ChartModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
