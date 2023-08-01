import { Component } from '@angular/core';
import { Player } from 'src/app/classes/Player';

@Component({
  selector: 'app-fifa-games-played',
  templateUrl: './fifa-games-played.component.html',
  styleUrls: ['./fifa-games-played.component.scss'],
})
export class FifaGamesPlayedComponent {
  players: Player[] = [
    new Player(
      'Valentin VIROT',
      'https://media.licdn.com/dms/image/D4E03AQGpk_EvdcLi1w/profile-displayphoto-shrink_800_800/0/1684249003276?e=1696464000&v=beta&t=0SYFAz3I2F0xeEtwv0901-XjHmxGVdkq-SfJbER3PK4'
    ),
    new Player(
      'Valentyn NOËL',
      'https://media.licdn.com/dms/image/D4E03AQHS8j5PWwDyfg/profile-displayphoto-shrink_800_800/0/1670626112878?e=1696464000&v=beta&t=FwC9dQPekuTT56q5fk30KBQyG4EPT4MaIVs5e9CQI2I'
    ),
    new Player(
      'Rémi MARCIANO',
      'https://media.licdn.com/dms/image/C4D03AQFhdqIv1qctkg/profile-displayphoto-shrink_800_800/0/1613575702887?e=1696464000&v=beta&t=Dy5QpJNisF6BT_BBQsbyrxo0foiS_MAPN1ejHELz5s4'
    ),
  ];
}
