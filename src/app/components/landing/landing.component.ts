import { Component, OnDestroy, OnInit } from '@angular/core';
import {GoogleAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import { Router } from '@angular/router';
import {Auth} from '@angular/fire/auth';
import { UserService } from 'src/app/service/user.service';
import { map, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {

  firebaseUI!: firebaseui.auth.AuthUI;
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;

  constructor(public userService:UserService, public auth: Auth, private afAuth: AngularFireAuth) { 
  }
 
  ngOnInit(): void {
    this.firebaseUI = new firebaseui.auth.AuthUI(this.auth)
    this.firebaseUI.start("#firebaseui-auth-container", {
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'characters'
    });

      this.afAuth.authState.subscribe(user =>user);
      this.isLoggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
      this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

  }

  ngOnDestroy(): void {
    this.firebaseUI.delete();
  }

  
  
    



}
