import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { ListAlbumesComponent } from './components/list-albumes/list-albumes.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';



const routes:Routes = [
  { path: '', redirectTo : "/albums", pathMatch : "full" },
  //{ path: '', component: },
  { path: 'player', component: PlayerComponent},
  { path: 'albums', component: ListAlbumesComponent},
  { path: 'categories', component: CardAlbumComponent},  // CAMBIAR POR EL MODULO DE CATEGORIAS DE SER NECESARIO  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
