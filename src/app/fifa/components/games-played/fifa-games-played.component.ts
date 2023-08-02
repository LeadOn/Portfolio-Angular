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
  numberOfGames = 5;
  loading = true;

  constructor(private yuFootApi: YuFootApiService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.loading = true;
    this.yuFootApi.getLastGamesPlayed(this.numberOfGames).subscribe((data) => {
      this.games = data;
      this.loading = false;
    });
  }
}
