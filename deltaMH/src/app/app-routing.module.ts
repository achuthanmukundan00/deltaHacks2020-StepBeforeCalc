import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { JournalEditorComponent } from "./pages/journal-editor/journal-editor.component";
import { JournalsComponent } from "./pages/journals/journals.component";
import { CalmComponent } from "./pages/calm/calm.component";
import { InspirationComponent } from "./pages/inspiration/inspiration.component";
import { TeamComponent } from "./pages/team/team.component";

import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "journal-editor",
    component: JournalEditorComponent,
    canActivate: [AuthGuard]
  },
  { path: "journals", component: JournalsComponent, canActivate: [AuthGuard] },
  { path: "calm", component: CalmComponent, canActivate: [AuthGuard] },
  {
    path: "inspiration",
    component: InspirationComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "team", component: TeamComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
