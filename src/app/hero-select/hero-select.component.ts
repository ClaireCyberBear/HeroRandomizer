import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.css'],
})
export class HeroSelectComponent implements OnInit {
  heroForm: FormGroup;
  selectedHero: any = null;
  isRoleSelected = false;
  excludeUltimate = false;

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService
  ) {
    this.heroForm = this.formBuilder.group({
      tank: [false],
      damage: [false],
      support: [false],
      ultimate: [false],
    });
    this.heroForm.valueChanges.subscribe((value) => {
      this.isRoleSelected = value.tank || value.damage || value.support;
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const roles = [];
    const formValue = this.heroForm.value;
    if (formValue.tank) roles.push('Tank');
    if (formValue.damage) roles.push('Damage');
    if (formValue.support) roles.push('Support');
    const selectedRole = roles[Math.floor(Math.random() * roles.length)];
    this.excludeUltimate = formValue.ultimate;

    this.heroService
      .getRandomHero(selectedRole, this.excludeUltimate)
      .subscribe((data: any) => {
        this.selectedHero = data;
      });
  }
}
