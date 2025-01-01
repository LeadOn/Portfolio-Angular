import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Repository } from 'src/app/classes/Repository';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
    standalone: false
})
export class ProjectCardComponent implements OnInit {
  @Input()
  repository: Repository = new Repository();

  arrowIcon = faExternalLinkAlt;
  logoUrl = '';

  constructor() {}

  ngOnInit(): void {
    this.logoUrl =
      this.repository.html_url + '/raw/main/images/banner-portfolio.webp';

    if (this.repository.topics != null && this.repository.topics.length > 0) {
      this.repository.topicsTransformed = [];

      this.repository.topics.forEach((topic) => {
        this.repository.topicsTransformed.push(
          this.capitalizeFirstLetter(topic)
        );
      });
    }
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
