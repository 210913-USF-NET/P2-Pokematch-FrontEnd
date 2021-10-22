import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ElementListComponent } from './element-list/element-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
{
  path: 'users/:id',
  component: UserProfileComponent
},

{
  path: 'users',
  component: UserListComponent
},
{
  path: 'elements',
  component: ElementListComponent
},
{
  path: '',
  component: HomePageComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
