import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';

import { SharedComponentsModule } from '@devon4ts-samples/shared-components';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent, HomeComponent, DataComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    SharedComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
