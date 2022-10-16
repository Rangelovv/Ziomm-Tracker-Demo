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

  characters: CharacterModel[] = [
    {name:"Sasho", tribe: "Planeta", totalHP:100, headHP:25, bodyHP:15, rarmHP:15, larmHP:15, rlegHP:15, llegHP:15, stamina:9, movementSpeed:14 },
    {name:"Hakera", tribe: "Madara",totalHP:120, headHP:30, bodyHP:20, rarmHP:20, larmHP:20, rlegHP:20, llegHP:20, stamina:14, movementSpeed:16 },
  ]
  charactersCopy: CharacterModel[] = [
    {name:"Sasho", tribe: "Planeta", totalHP:100, headHP:25, bodyHP:15, rarmHP:15, larmHP:15, rlegHP:15, llegHP:15, stamina:9, movementSpeed:14 },
    {name:"Hakera", tribe: "Madara",totalHP:120, headHP:30, bodyHP:20, rarmHP:20, larmHP:20, rlegHP:20, llegHP:20, stamina:14, movementSpeed:16 },
  ]
  

  constructor(private fr:Firestore, private user:UserService, private afAuth: AngularFireAuth, private afs:AngularFirestore) { }

  
  
  returnActiveCharacters(){
    return this.charactersCopy;
  }
  
  returnExistingCharacters():Observable<CharacterModel[]>{
    const booksRef = collection(this.fr, `users/${this.user.uid}/characters/`);
    return collectionData(booksRef, { idField: 'id' }) as Observable<CharacterModel[]>;
  }

  returnFRChars():Observable<CharacterModel[]>{
    const booksRef = collection(this.fr, `users/${this.user.uid}/characters/`);
    return collectionData(booksRef, { idField: 'id' }) as Observable<CharacterModel[]>;
  }



  addCharacter(character: CharacterModel){
    this.characters.push(character)
    this.charactersCopy.push(character)
    const booksRef = collection(this.fr, `users/${this.user.uid}/characters`,); 
    return addDoc(booksRef, character);

  }

 
 
  


 
}
