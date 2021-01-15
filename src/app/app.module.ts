import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { TypeComponent } from './components/type/type.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesPipe } from './pipes/favorites.pipe';
import { DetailsComponent } from './components/details/details.component';
import { StatComponent } from './components/stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    TypeComponent,
    FavoritesComponent,
    FavoritesPipe,
    DetailsComponent,
    StatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
