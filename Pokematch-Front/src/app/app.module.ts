import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ElementListComponent } from './element/element-list/element-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { UserCreationComponent } from './user/user-creation/user-creation.component';
import { MessageComponent } from './message/message.component';
import { BufferComponent } from './buffer/buffer.component';
import { MatchComponent } from './match/match.component';
import { GetMatchComponent } from './get-match/get-match.component';
import { PokemonminigameComponent } from './pokemonminigame/pokemonminigame.component';
import { MovesComponent } from './moves/moves.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ElementListComponent,
    HomePageComponent,
    UserProfileComponent,
    PokemonComponent,
    QuizFormComponent,
    UserCreationComponent,
    MessageComponent,
    BufferComponent,
    MatchComponent,
    GetMatchComponent,
    PokemonminigameComponent,
    MovesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ... env.auth,
    }),

    FormsModule,
    ReactiveFormsModule,

    /* Need to import so service API can be use. */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
