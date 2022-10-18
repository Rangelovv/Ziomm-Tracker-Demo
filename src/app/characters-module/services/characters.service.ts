import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';
import { Firestore, snapToData } from '@angular/fire/firestore';
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
  


  returnActiveCharacters():Observable<CharacterModel[]>{
    let uid = localStorage.getItem('uid')
    const charCollection = this.afs.collection<CharacterModel>(`users/${uid}/characters/`)
    return charCollection.valueChanges()
  }

  returnCharacters():Observable<CharacterModel[]>{
    let uid = localStorage.getItem('uid')
    const charCollection = this.afs.collection<CharacterModel>(`users/${uid}/characters/`)
    return charCollection.valueChanges()
  }



  addCharacter(character: CharacterModel){
    let uid = localStorage.getItem('uid')
    const booksRef = collection(this.fr, `users/${uid}/characters`,); 
    return addDoc(booksRef, character);

  }

 
 
  


 
}
