import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./login/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./login/pages/sign-up/sign-up.component";
import {ResetPasswordComponent} from "./login/pages/reset-password/reset-password.component";
import {ForgotPasswordComponent} from "./login/pages/forgot-password/forgot-password.component";
import {PageNotFoundComponent} from "./page-not-found/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/signin'},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(module_ => module_.OrdersModule)
  },
  {path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(c => c.ClientsModule)
  },
  {path: '**',
    loadChildren: () => import('./page-not-found/Page-not-found.module').then(pnf => pnf.PageNotFoundModule)
  },
  //{path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
