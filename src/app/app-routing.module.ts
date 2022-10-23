import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/landing']);
const redirectLoggedIn = () => redirectLoggedInTo(['/characters'])
const redirectLoggedInLanding = () => redirectLoggedInTo(['/characters'])


const routes: Routes = [
  {
    path:"",
    component: LandingComponent,
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInLanding}
  },
  {
    path:"landing",
    component: LandingComponent,
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedIn}
  },
  {
    path:"characters",
    loadChildren: () =>import('./characters-module/characters.module').then(m=>m.CharactersModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"tracker",
    loadChildren: () =>import('./tracker-module/tracker.module').then(m=>m.TrackerModule),
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
