import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillCardComponent } from './shared/skill-card/skill-card.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { HomeComponent } from './home/home.component';
import { HomeWelcomeComponent } from './home/components/welcome/welcome.component';
import { HomeAboutComponent } from './home/components/about/about.component';
import { HomeExperienceComponent } from './home/components/experience/experience.component';
import { HomePortfolioComponent } from './home/components/portfolio/portfolio.component';
import { HomeContactComponent } from './home/components/contact/contact.component';
import { HomeCertificationsComponent } from './home/components/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SkillCardComponent,
    ProjectCardComponent,
    HomeComponent,
    HomeWelcomeComponent,
    HomeAboutComponent,
    HomeExperienceComponent,
    HomeCertificationsComponent,
    HomePortfolioComponent,
    HomeContactComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
