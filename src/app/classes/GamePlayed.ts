import { Highlight } from './Highlight';
import { Team } from './Team';

export class GamePlayed {
  id: number = 0;
  playedOn: Date = new Date();
  platform: string = 'Unknown';
  team1: Team = new Team();
  team2: Team = new Team();
  highlights: Highlight[] = [];
}
