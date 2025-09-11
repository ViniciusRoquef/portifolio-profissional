import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPageComponent } from './header-page/header-page.component';
import { PortfolioBodyComponent } from './portfolio-body/portfolio-body.component';
import { SectionSplitComponent } from './portfolio-body/section-split/section-split.component';
import { NewProjectsComponent } from './portfolio-body/new-projects/new-projects.component';
import { NewProjectsFilterComponent } from './portfolio-body/new-projects/new-projects-filter/new-projects-filter.component';
import { NewProjectsTableComponent } from './portfolio-body/new-projects/new-projects-table/new-projects-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    PortfolioBodyComponent,
    SectionSplitComponent,
    NewProjectsComponent,
    NewProjectsFilterComponent,
    NewProjectsTableComponent
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
