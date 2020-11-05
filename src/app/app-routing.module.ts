import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth.guard';
import { AuthreciproqueGuard } from './authreciproque.guard';
import { LoginComponent } from "./common/login/login.component";
import { RegisterComponent } from "./common/register/register.component";
import { DetailsComponent } from './details/details.component';
import { ListComponent } from "./todo/list/list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  { path: "register", component: RegisterComponent ,canActivate : [AuthreciproqueGuard]  },
  { path: "login", component: LoginComponent ,canActivate : [AuthreciproqueGuard]  },
  { path: "list", component: ListComponent, canActivate : [AuthGuard] },
  { path: "detail/:id", component: DetailsComponent, canActivate : [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
