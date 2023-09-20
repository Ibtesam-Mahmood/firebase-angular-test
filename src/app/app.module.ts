import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Each module has a decorator like this
@NgModule({
  declarations: [
    // Components in this module?
    AppComponent,
  ],
  // Imports in this module
  imports: [BrowserModule, AppRoutingModule],
  providers: [],

  // Must bootstrap the root component in the root module
  bootstrap: [AppComponent],
})

// Each app has to have a root module
export class AppModule {}
