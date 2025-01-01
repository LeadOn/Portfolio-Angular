import { Component } from '@angular/core';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faLocationArrow,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class HomeContactComponent {
  mailIcon = faMailBulk;
  locationIcon = faLocationArrow;
  linkedInIcon = faLinkedin;
  externalLinkIcon = faExternalLinkAlt;
  youtubeIcon = faYoutube;
}
