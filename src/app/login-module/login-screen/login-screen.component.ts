import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import { Router } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit, OnDestroy {
  
  ui!: firebaseui.auth.AuthUI;

  constructor(private afAuth: AngularFireAuth, private router:Router, public auth: Auth) { }

  ngOnInit(): void {


    this.ui = new firebaseui.auth.AuthUI(this.auth)
    this.ui.start("#firebaseui-auth-container", {
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'landing'
    })
   

  }
  
  ngOnDestroy(): void {
    this.ui.delete();
  }

  

  

}
