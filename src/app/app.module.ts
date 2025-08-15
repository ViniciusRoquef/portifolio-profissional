import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPageComponent } from './header-page/header-page.component';
import { PortfolioBodyComponent } from './portfolio-body/portfolio-body.component';
import { SectionSplitComponent } from './portfolio-body/section-split/section-split.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    PortfolioBodyComponent,
    SectionSplitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
