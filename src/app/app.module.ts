import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { JudgesComponent } from './components/judges/judges.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { OwnersComponent } from './components/owners/owners.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JudgesComponent,
    ParticipantsComponent,
    OwnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
