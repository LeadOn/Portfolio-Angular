import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../interfaces/Repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  baseUrl = 'https://api.github.com/';

  constructor(private client: HttpClient) {}

  getRepos(): Observable<Repository[]> {
    return this.client.get<Repository[]>(this.baseUrl + 'users/LeadOn/repos');
  }
}
