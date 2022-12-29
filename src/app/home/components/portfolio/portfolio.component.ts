import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/Repository';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class HomePortfolioComponent implements OnInit {
  repositories: Repository[] = [];
  apiError = false;

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.github.getRepos().subscribe(
      (data) => {
        console.log(data);
        this.repositories = data;
      },
      (err) => {
        console.error(err);
        this.apiError = true;
      }
    );
  }
}
