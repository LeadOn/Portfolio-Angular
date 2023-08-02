import { Component, Input } from '@angular/core';
import { Player } from 'src/app/classes/Player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent {
  @Input()
  player: Player = new Player();

  constructor() {}
}
