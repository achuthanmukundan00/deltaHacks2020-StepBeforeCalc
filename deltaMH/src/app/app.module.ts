import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JournalEditorComponent } from './pages/journal-editor/journal-editor.component';
import { JournalsComponent } from './pages/journals/journals.component';
import { CalmComponent } from './pages/calm/calm.component';
import { InspirationComponent } from './pages/inspiration/inspiration.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    JournalEditorComponent,
    JournalsComponent,
    CalmComponent,
    InspirationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
