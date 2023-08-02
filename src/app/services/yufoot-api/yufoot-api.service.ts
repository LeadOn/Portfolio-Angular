import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/classes/Player';
import { GamePlayed } from 'src/app/classes/GamePlayed';

@Injectable({
  providedIn: 'root',
})
export class YuFootApiService {
  baseUrl = 'http://localhost:5184';

  constructor(private client: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.client.get<Player[]>(this.baseUrl + '/player');
  }

  getLastGamesPlayed(limit: number): Observable<GamePlayed[]> {
    return this.client.get<GamePlayed[]>(this.baseUrl + '/game/last/' + limit);
  }
}
