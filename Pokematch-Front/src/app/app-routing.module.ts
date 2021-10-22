import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElementListComponent } from './element/element-list/element-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EventEmitterService } from './event-emitter.service';

const routes: Routes = [
  {
    path: 'elements',
    component: ElementListComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
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