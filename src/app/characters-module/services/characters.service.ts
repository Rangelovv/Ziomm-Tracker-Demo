import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';
import { Firestore } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { addDoc } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { UserService } from 'src/app/service/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  constructor(private fr:Firestore, private afs:AngularFirestore) {  }
  


  returnFRChars():Observable<CharacterModel[]>{
    let uid = localStorage.getItem('uid')
    const booksRef = collection(this.fr, `users/${uid}/characters/`);
    return collectionData(booksRef, { idField: 'id' }) as Observable<CharacterModel[]>;
  }

  loadCharacters(): Observable<CharacterModel[]>{
    let uid = localStorage.getItem('uid')
    return this.afs.collection(`users/${uid}/characters/`).get().pipe(map(results => {
      return results.docs.map(snap => {
        return {
          ...<any>snap.data()
        }
      })
    }))
  }

 
 

  addCharacter(character: CharacterModel){
    let uid = localStorage.getItem('uid')
    const booksRef = collection(this.fr, `users/${uid}/characters`,); 
    return addDoc(booksRef, character);

  }

 
 
  


 
}
