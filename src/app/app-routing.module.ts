import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FifaHomeComponent } from './fifa/fifa-home.component';
import { FifaPlayerDetailsComponent } from './fifa/components/players/details/fifa-player-details.component';

const routes: Routes = [
  {
    path: 'fifa/:id',
    component: FifaPlayerDetailsComponent,
  },
  {
    path: 'fifa',
    component: FifaHomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
