import { Highlight } from './Highlight';
import { Team } from './Team';

export class GamePlayed {
  id: number = 0;
  playedOn: Date = new Date();
  platformId: number = 0;
  team1: Team = new Team();
  team2: Team = new Team();
  highlights: Highlight[] = [];
}
