import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: CharacterModel[] = [
    {name:"Sasho", tribe: "Planeta", headHP:25, totalHP:100},
    {name:"Hakera", tribe: "Madara", headHP: 20, totalHP:150},
  ]
  charactersCopy: CharacterModel[] = [
    {name:"Sasho", tribe: "Planeta", headHP:25, totalHP:100},
    {name:"Hakera", tribe: "Madara", headHP: 20, totalHP:150},
  ]

  constructor() { }

  returnCharacters(){
    return this.characters;
  }
  
  returnCopyCharacters(){
    return this.charactersCopy;
  }

  addCharacter(character: CharacterModel){
    this.characters.push(character)
    this.charactersCopy.push(character)
  }



 
}
