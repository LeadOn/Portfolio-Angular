import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-entry',
  templateUrl: './experience-entry.component.html',
  styleUrls: ['./experience-entry.component.scss'],
})
export class ExperienceEntryComponent {
  // Left = false, right = true
  @Input()
  position = false;

  @Input()
  title = 'Title';

  @Input()
  shortDesc = 'Short desc';

  @Input()
  desc = 'Desc';
}
