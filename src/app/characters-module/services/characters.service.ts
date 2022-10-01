import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';
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
  

  constructor() { }

  returnExistingCharacters(){
    return this.characters;
  }
  
  returnActiveCharacters(){
    return this.charactersCopy;
  }
 
  

  addCharacter(character: CharacterModel){
    this.characters.push(character)
    this.charactersCopy.push(character)
  }



 
}
