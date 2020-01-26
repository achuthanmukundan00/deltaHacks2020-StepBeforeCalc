import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { Page1Component } from "./pages/page1/page1.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "page1", component: Page1Component },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
