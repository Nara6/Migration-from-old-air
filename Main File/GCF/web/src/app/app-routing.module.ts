import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './main/auth/auth.guard';


const routes: Routes = [
  
  // ================================================================================>> Auth
  {
    path: 'auth',
    loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule)
  },

  // ================================================================================>> Member
  {
    path: '',
    loadChildren: () => import('./main/member/member.module').then(m => m.MemberModule),
    canLoad: [AuthGuard]
  },

  // ================================================================================>> CP
  {
    path: 'cp',
    loadChildren: () => import('./main/cp/cp.module').then(m => m.CPModule),
    canLoad: [AuthGuard]
  },

  // ================================================================================>> My Profile
  {
    path: 'my-profile',
    loadChildren: () => import('./main/my-profile/my-profile.module').then(m => m.MyProfileModule),
    canLoad: [AuthGuard]
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
