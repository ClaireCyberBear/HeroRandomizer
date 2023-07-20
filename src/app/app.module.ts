import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'hero-select', component: HeroSelectComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '', redirectTo: '/hero-selection', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    RandomizerComponent,
    NavbarComponent,
    HeroSelectComponent,
    HeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
