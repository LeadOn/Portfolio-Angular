import { Component } from '@angular/core';
import { GamePlayed } from 'src/app/classes/GamePlayed';
import { YuFootApiService } from 'src/app/services/yufoot-api/yufoot-api.service';

@Component({
  selector: 'app-fifa-games-played',
  templateUrl: './fifa-games-played.component.html',
  styleUrls: ['./fifa-games-played.component.scss'],
})
export class FifaGamesPlayedComponent {
  games: GamePlayed[] = [];

  constructor(private yuFootApi: YuFootApiService) {}

  ngOnInit(): void {
    this.yuFootApi.getLastFiveGames().subscribe((data) => {
      this.games = data;
    });
  }
}
