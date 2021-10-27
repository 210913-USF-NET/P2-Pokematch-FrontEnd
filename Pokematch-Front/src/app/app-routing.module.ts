import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElementListComponent } from './element/element-list/element-list.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserCreationComponent } from './user/user-creation/user-creation.component';
import { BufferComponent } from './buffer/buffer.component';
import { MessageComponent } from './message/message.component';
import { MatchComponent } from './match/match.component';

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
  },

  /* ----- User Creation ----- */
  {
    path: 'user-creation',
    component: UserCreationComponent
  },

  /* ----- Buffer ----- */
  {
    path: 'buffer',
    component: BufferComponent
  },
  /* ----- Match ----- */
  {
    path: 'match',
    component: MatchComponent
  },

  /* ----- Message ----- */
  {
    path: 'userprofile/message',
    component: MessageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
