import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Repository } from '../../../shared/classes/Repository';
import { GithubService } from '../../../shared/services/github.service';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HomePortfolioComponent implements OnInit {
  repositories: Repository[] = [];
  bookIcon = faBook;
  apiError = false;

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.github.getRepos().subscribe(
      (data) => {
        this.repositories = data;
      },
      (err) => {
        console.error(err);
        this.apiError = true;
      },
    );
  }
}
