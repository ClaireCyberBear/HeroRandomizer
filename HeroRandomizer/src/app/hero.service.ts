import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get('http://localhost:3000/api/heroes');
  }

  getRandomHero(role: string, excludeUltimate: boolean) {
    return this.http.get(
      `http://localhost:3000/api/random-hero?role=${role}&excludeUltimate=${excludeUltimate.toString()}`
    );
  }
}
