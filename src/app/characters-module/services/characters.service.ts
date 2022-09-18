import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: CharacterModel[] = [
    {name:"Sasho", tribe: "Planeta"},
    {name:"Hakera", tribe: "Madara"}
  ]
  constructor() { }

  returnCharacters(){
    return this.characters;
  }

  addCharacter(character: CharacterModel){
    this.characters.push(character)
  }
}
