import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ChatComponent} from "../components/chat/chat.component";
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {AuthGuard} from "../_quards/auth.guard";

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent

  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  }
];

export const authProviders = [AuthGuard];

export const appRoutingProviders: any[] = [
  authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
