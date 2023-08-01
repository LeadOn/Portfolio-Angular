import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GamePlayed } from 'src/app/classes/GamePlayed';

@Component({
  selector: 'app-fifa-games-played',
  templateUrl: './fifa-games-played.component.html',
  styleUrls: ['./fifa-games-played.component.scss'],
})
export class FifaGamesPlayedComponent {
  games: GamePlayed[] = [];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client
      .get(
        'https://raw.githubusercontent.com/LeadOn/Database/master/games-played.json'
      )
      .subscribe((data) => {
        this.games = data as GamePlayed[];
      });
  }
}
