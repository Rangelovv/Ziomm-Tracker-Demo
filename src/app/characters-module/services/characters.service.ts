import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';
import { deleteDoc, doc, Firestore, snapToData, where } from '@angular/fire/firestore';
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
    return charCollection.snapshotChanges().pipe(
      map(chars => chars.map(char => {
        const data = char.payload.doc.data();
        const id = char.payload.doc.id;
        return { id, ...data };
      }))
    );
  }



  addCharacter(character: CharacterModel){
    let uid = localStorage.getItem('uid')
    const booksRef = collection(this.fr, `users/${uid}/characters`); 
    return addDoc(booksRef, character);

  }

  deleteCharacter(id:string|undefined){
    let uid = localStorage.getItem('uid')
    const charCollection = this.afs.doc<CharacterModel>(`users/${uid}/characters/${id}`).delete()
    
    
  }

 
 
  


 
}
