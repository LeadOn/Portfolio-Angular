import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/classes/Player';
import { YuFootApiService } from 'src/app/services/yufoot-api/yufoot-api.service';

@Component({
  selector: 'app-fifa-players',
  templateUrl: './fifa-players.component.html',
  styleUrls: ['./fifa-players.component.scss'],
})
export class FifaPlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private yuFootApi: YuFootApiService) {}

  ngOnInit(): void {
    this.yuFootApi.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }
}
