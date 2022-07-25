import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
  ],
  imports: [BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    NbThemeModule.forRoot({ name: 'cosmic' }), 
    NbLayoutModule,
    NbButtonModule,  
    NbEvaIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
