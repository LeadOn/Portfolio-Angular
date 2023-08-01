import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/classes/Player';

@Component({
  selector: 'app-fifa-players',
  templateUrl: './fifa-players.component.html',
  styleUrls: ['./fifa-players.component.scss'],
})
export class FifaPlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    console.log('Oui');
    this.client
      .get(
        'https://raw.githubusercontent.com/LeadOn/Database/master/players.json'
      )
      .subscribe((data) => {
        this.players = data as Player[];
      });
  }
}
