import { Highlight } from './Highlight';
import { Player } from './Player';

export class GamePlayed {
  id: number = 0;
  gameId: number = 0;
  player1: Player = new Player('', '');
  player2: Player = new Player('', '');
  team1: string = '';
  team2: string = '';
  score1: number = 0;
  score2: number = 0;
  location: number = 0;
  highlights: Highlight[] = [];
}
