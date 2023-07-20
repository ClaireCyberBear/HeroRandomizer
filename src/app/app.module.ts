import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'hero-select', component: HeroSelectComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '', redirectTo: '/hero-select', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, HeroSelectComponent, HeroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
