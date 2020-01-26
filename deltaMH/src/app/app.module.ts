import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

const config = {
  apiKey: "AIzaSyCGTJpMsQ24PCHYZb9s78x_w2Iy2hHlm0E",
  authDomain: "deltahacks-stepb4calc.firebaseapp.com",
  databaseURL: "https://deltahacks-stepb4calc.firebaseio.com",
  projectId: "deltahacks-stepb4calc",
  storageBucket: "deltahacks-stepb4calc.appspot.com",
  messagingSenderId: "461465040431",
  appId: "1:461465040431:web:595be984cb1625abca38da",
  measurementId: "G-ZCVPXSF2W1"
};

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { JournalEditorComponent } from "./pages/journal-editor/journal-editor.component";
import { JournalsComponent } from "./pages/journals/journals.component";
import { CalmComponent } from "./pages/calm/calm.component";
import { InspirationComponent } from "./pages/inspiration/inspiration.component";
import { LoginComponent } from "./pages/login/login.component";
import { TeamComponent } from "./pages/team/team.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    JournalEditorComponent,
    JournalsComponent,
    CalmComponent,
    InspirationComponent,
    LoginComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
