import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';


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
    loadChildren: () =>import('./characters-module/characters.module').then(m=>m.CharactersModule)
  },
  {
    path:"tracker",
    loadChildren: () =>import('./tracker-module/tracker.module').then(m=>m.TrackerModule)  
  },
  {
    path:"login",
    loadChildren: () =>import('src/app/login-module/login.module').then(m=>m.LoginModule)  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
