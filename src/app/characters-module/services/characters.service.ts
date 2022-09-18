import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: CharacterModel[] = []
  constructor() { }

  returnCharacters(){
    return this.characters;
  }

  addCharacter(character: CharacterModel){
    this.characters.push(character)
  }
}
