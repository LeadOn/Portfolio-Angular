import { Component } from '@angular/core';
import {
  faCloud,
  faCode,
  faDatabase,
  faMobileAlt,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Skill } from 'src/app/classes/Skill';

@Component({
  selector: 'app-home-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class HomeSkillsComponent {
  skills: Skill[] = [
    new Skill('C#', faCode),
    new Skill('Angular', faCode),
    new Skill('ServiceNow', faCode),
    new Skill('Azure', faCloud),
    new Skill('Agile', faBookmark),
    new Skill('Xamarin', faMobileAlt),
    new Skill('PWA', faMobileAlt),
    new Skill('SQL', faDatabase),
    new Skill('Micro-Services', faNetworkWired),
  ];
}
