import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: false,
})
export class HomeWelcomeComponent {
  linkedInIcon = faLinkedin;
  youtubeIcon = faYoutube;
  githubIcon = faGithub;
  jobIcon = faBriefcase;
}
