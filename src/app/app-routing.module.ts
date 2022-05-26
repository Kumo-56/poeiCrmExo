import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

//TODO: Mettre en place les guards
const routes: Routes = [

  {path:'', pathMatch:'full', redirectTo:'login'},
  {path: 'login',
    loadChildren: () => import('./login/login.module').then(module_ => module_.LoginModule)
  },

  {path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(module_ => module_.OrdersModule)
  },
  {path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(c => c.ClientsModule)
  },
  {path: '**',
    loadChildren: () => import('./page-not-found/Page-not-found.module').then(pnf => pnf.PageNotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
