import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable, of, switchMap } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AnimationGroupMetadata } from '@angular/animations';
import { Auth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private afs:AngularFirestore, private auth:Auth) {
}
   
   uid!:string | undefined;
   uid$ = this.afAuth.authState.subscribe(value => value ? this.uid = value.uid : null)

   createUserDocument = this.afAuth.authState.pipe(switchMap(user => {
    if(user){
        console.log("neshto")
        return this.afs.collection('users').doc(`/${user.uid}`).set({
            name: user.displayName,
            email: user.email,
        })    
        }else{
        return of(null)
    }
  }))


  currentUser$ = this.afAuth.authState.pipe(map(user => {
    if(user){
        return {uid: user.uid, email:user.email, displayName:user.displayName}
    }
    return null
  }))

  isLoggedIn(){
    if(localStorage.getItem('uid') !== null){
        console.log(localStorage.getItem('uid'))
        return true
    }else{
        console.log("FUCK OFF")
        return false
    }
  }
  
   
    // uid$ = this.afAuth.authState.subscribe(value => value ?  value.uid : null)





   
  

 


  


 
}
