import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';
import { ListAlbumesComponent } from './components/list-albumes/list-albumes.component';
import { NavComponent } from './components/nav/nav.component';
import { PlayerComponent } from './components/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    CardAlbumComponent,
    ListAlbumesComponent,
    NavComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
