import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faLocationArrow,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class HomeContactComponent {
  phoneIcon = faPhone;
  mailIcon = faMailBulk;
  locationIcon = faLocationArrow;
  linkedInIcon = faLinkedin;
  externalLinkIcon = faExternalLinkAlt;
}
