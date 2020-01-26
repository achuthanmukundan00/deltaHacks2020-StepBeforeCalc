import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { JournalEditorComponent } from "./pages/journal-editor/journal-editor.component";
import { JournalsComponent } from "./pages/journals/journals.component";
import { CalmComponent } from "./pages/calm/calm.component";
import { InspirationComponent } from "./pages/inspiration/inspiration.component";
import { WelcomeMenuComponent } from "./pages/welcome-menu/welcome-menu.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "journal-editor", component: JournalEditorComponent },
  { path: "journals", component: JournalsComponent },
  { path: "calm", component: CalmComponent },
  { path: "inspiration", component: InspirationComponent },
  { path: "welcome-menu", component: WelcomeMenuComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
