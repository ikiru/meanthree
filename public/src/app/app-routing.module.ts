// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { AddComponent } from "./add/add.component";

// Routes
const routes: Routes = [
  { path: "", pathMatch: "full", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent }
  { path: "add", component: AddComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
