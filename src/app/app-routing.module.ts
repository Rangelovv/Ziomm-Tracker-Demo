import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectLoggedIn = () => redirectLoggedInTo(['/landing'])

const routes: Routes = [
  {
    path:"",
    component: LandingComponent
  },
  {
    path:"landing",
    component: LandingComponent
  },
  {
    path:"characters",
    loadChildren: () =>import('./characters-module/characters.module').then(m=>m.CharactersModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path:"tracker",
    loadChildren: () =>import('./tracker-module/tracker.module').then(m=>m.TrackerModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path:"login",
    loadChildren: () =>import('src/app/login-module/login.module').then(m=>m.LoginModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedIn}
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
