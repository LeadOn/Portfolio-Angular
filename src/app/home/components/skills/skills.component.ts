import { Component } from '@angular/core';
import {
  faCloud,
  faCode,
  faDatabase,
  faMobileAlt,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class HomeSkillsComponent {
  codeIcon = faCode;
  cloudIcon = faCloud;
  agileIcon = faBookmark;
  mobileIcon = faMobileAlt;
  databaseIcon = faDatabase;
  networkIcon = faNetworkWired;
}
