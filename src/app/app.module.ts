import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegistrationComponent } from './travel-registration/travel-registration.component';
import { ViewDestinationComponent } from './view-destination/view-destination.component';
import { SearchPlacesComponent } from './search-places/search-places.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegistrationComponent,
    ViewDestinationComponent,
    SearchPlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
