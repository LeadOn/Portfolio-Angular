import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HomeAboutComponent {
  infoIcon = faInfoCircle;
}
