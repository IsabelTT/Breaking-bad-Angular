import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: CharacterListComponent },
  { path: 'home/:page', component: CharacterListComponent },
  { path: 'character/:idcharacter', component: CharacterDetailComponent },
  { path: 'search/:name', component: CharacterListComponent },
  { path: '**', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
