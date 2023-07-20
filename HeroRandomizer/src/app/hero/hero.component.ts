import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroes: any = {};

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((data: any) => {
      this.heroes = data;
    });
  }
}
