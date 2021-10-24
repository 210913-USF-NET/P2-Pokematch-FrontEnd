import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventEmitterService } from './event-emitter.service';
import { ElementListComponent } from './element/element-list/element-list.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  /* ----- Home ----- */
  {
    path: '',
    component: HomePageComponent
  },
  
  /* ----- Element ----- */
  {
    path: 'elements',
    component: ElementListComponent
  },

  /* ----- Quiz ----- */
  {
    path: 'quiz',
    component: QuizFormComponent
  },

  /* ----- Pokemon ----- */
  {
    path: 'pokemon',
    component: PokemonComponent
  },

  /* ----- User ----- */
  {
    path: 'userprofile',
    component: UserProfileComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    providers: [EventEmitterService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
