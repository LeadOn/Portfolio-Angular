import { Component, OnInit } from '@angular/core';
import { Repository } from '../interfaces/Repository';
import { GithubService } from '../services/github/github.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  dataLoaded = false;
  repos: Repository[] = [];

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.github.getRepos().subscribe(
      (data) => {
        this.repos = data;
        this.dataLoaded = true;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
