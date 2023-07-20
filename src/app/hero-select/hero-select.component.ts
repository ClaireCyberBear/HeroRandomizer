import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.css'],
})
export class HeroSelectComponent implements OnInit {
  heroForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.heroForm = this.fb.group({
      role: [''],
      ultimate: [false],
    });
  }
  onSubmit() {
    console.log(this.heroForm.value);
  }
}
