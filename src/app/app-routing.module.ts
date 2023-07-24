import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: 'hero-select', component: HeroSelectComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '', redirectTo: '/hero-select', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
