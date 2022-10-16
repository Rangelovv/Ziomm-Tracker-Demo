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

  constructor(private afAuth: AngularFireAuth, private afs:AngularFirestore, private auth:Auth) { }



    uid!:string | null;
    uid$ = this.afAuth.authState.subscribe(value => value ? this.uid = value.uid : null)

    newUser = this.afAuth.authState.pipe(switchMap(user => {
        if(user){
                return this.afs.collection('users').doc(`/${this.uid}`).set({
                    name: user.displayName,
                    email: user.email,
                })    
                }else{
                return of(null)
            }
        }))





   
  

 


  


 
}
