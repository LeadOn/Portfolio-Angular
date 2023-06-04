import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillCardComponent } from './shared/skill-card/skill-card.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { HomeComponent } from './home/home.component';
import { HomeWelcomeComponent } from './home/components/welcome/welcome.component';
import { HomeAboutComponent } from './home/components/about/about.component';
import { HomeExperienceComponent } from './home/components/experience/experience.component';
import { HomeSkillsComponent } from './home/components/skills/skills.component';
import { HomePortfolioComponent } from './home/components/portfolio/portfolio.component';
import { HomeContactComponent } from './home/components/contact/contact.component';
import { ExperienceEntryComponent } from './shared/experience-entry/experience-entry.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SkillCardComponent,
    ProjectCardComponent,
    HomeComponent,
    HomeWelcomeComponent,
    HomeAboutComponent,
    HomeExperienceComponent,
    HomeSkillsComponent,
    HomePortfolioComponent,
    HomeContactComponent,
    ExperienceEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
