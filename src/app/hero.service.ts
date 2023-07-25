import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes!: any[];

  constructor(private http: HttpClient) {
    this.loadHeroes();
  }

  loadHeroes(): void {
    this.http
      .get<any[]>('assets/herodata.json')
      .subscribe((data) => (this.heroes = data));
  }

  getHeroes(): Observable<any[]> {
    return of(this.heroes);
  }

  getRandomHero(role: string, excludeUltimate: boolean): Observable<any> {
    const filteredHeroes = this.heroes.filter((hero) => hero.role === role);
    const selectedHero =
      filteredHeroes[Math.floor(Math.random() * filteredHeroes.length)];
    const abilities = [
      selectedHero.abilityOne,
      selectedHero.abilityTwo,
      selectedHero.secondaryFire,
    ];

    if (!excludeUltimate) {
      abilities.push(selectedHero.ultimate);
    }

    const disabledAbility =
      abilities[Math.floor(Math.random() * abilities.length)];
    selectedHero.disabledAbility = disabledAbility;
    return of(selectedHero);
  }
}
