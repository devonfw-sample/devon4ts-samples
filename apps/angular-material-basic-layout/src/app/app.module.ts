import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedComponentsModule } from '@devon4ts-samples/shared-components';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DataComponent],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
