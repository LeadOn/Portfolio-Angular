/* Angular related */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Additionnal modules */
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Shared components */
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { SkillCardComponent } from './shared/skill-card/skill-card.component';

/* Home page components */
import { HomeComponent } from './home/home.component';
import { HomeWelcomeComponent } from './home/components/welcome/welcome.component';
import { HomeAboutComponent } from './home/components/about/about.component';
import { HomeExperienceComponent } from './home/components/experience/experience.component';
import { HomeSkillsComponent } from './home/components/skills/skills.component';
import { HomePortfolioComponent } from './home/components/portfolio/portfolio.component';
import { HomeContactComponent } from './home/components/contact/contact.component';
import { ExperienceEntryComponent } from './shared/experience-entry/experience-entry.component';

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
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
