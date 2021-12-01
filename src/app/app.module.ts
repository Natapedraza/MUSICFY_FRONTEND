import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';
import { ListAlbumesComponent } from './components/list-albumes/list-albumes.component';
import { NavComponent } from './components/nav/nav.component';
import { PlayerComponent } from './components/player/player.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CardAlbumComponent,
    ListAlbumesComponent,
    NavComponent,
    PlayerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
