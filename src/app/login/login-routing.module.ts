import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {ResetPasswordComponent} from "./pages/reset-password/reset-password.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'signin'},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
