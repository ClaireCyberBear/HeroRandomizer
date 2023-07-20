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

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService
  ) {
    this.heroForm = this.formBuilder.group({
      role: ['Tank', Validators.required],
      ultimate: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const role = this.heroForm.value.role;
    const excludeUltimate = this.heroForm.value.ultimate;

    this.heroService
      .getRandomHero(role, excludeUltimate)
      .subscribe((data: any) => {
        this.selectedHero = data;
      });
  }
}
