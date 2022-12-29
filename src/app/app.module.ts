import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeWelcomeComponent } from './home/components/welcome/welcome.component';
import { HomeAboutComponent } from './home/components/about/about.component';
import { HomeExperienceComponent } from './home/components/experience/experience.component';
import { HomeSkillsComponent } from './home/components/skills/skills.component';
import { SkillCardComponent } from './shared/skill-card/skill-card.component';
import { HomePortfolioComponent } from './home/components/portfolio/portfolio.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeWelcomeComponent,
    HomeAboutComponent,
    HomeExperienceComponent,
    HomeSkillsComponent,
    SkillCardComponent,
    HomePortfolioComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
