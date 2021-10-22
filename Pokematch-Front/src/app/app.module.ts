import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { ElementListComponent } from './element/element-list/element-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EventEmitterService } from './event-emitter.service';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    ElementListComponent,
    HomePageComponent,
    UserProfileComponent,
    PokemonComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    /* Need to import so service API can be use. */
    HttpClientModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
