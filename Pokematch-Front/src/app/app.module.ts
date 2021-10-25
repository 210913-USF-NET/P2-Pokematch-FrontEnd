import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EventEmitterService } from './event-emitter.service';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ElementListComponent } from './element/element-list/element-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { UserCreationComponent } from './user-creation/user-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    ElementListComponent,
    HomePageComponent,
    UserProfileComponent,
    PokemonComponent,
    QuizFormComponent,
    UserCreationComponent
  ],
  imports: [
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
