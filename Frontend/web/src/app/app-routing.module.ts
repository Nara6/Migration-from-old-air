// ===================================================================>> Core Library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './main/auth/auth.guard';

const routes: Routes = [
  
  // ================================================================================>> Auth
  {
    path: 'auth',
    loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule)
  },

  // ================================================================================>> Portal
  {
    path: '',
    loadChildren: () => import('./main/cp/portal.module').then(m => m.PortalModule),
    canLoad: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    // { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
