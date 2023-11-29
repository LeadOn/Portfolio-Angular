import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class HomeAboutComponent {
  infoIcon = faInfoCircle;
}
