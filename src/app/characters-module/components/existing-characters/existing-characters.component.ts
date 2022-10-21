import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CharacterModel } from '../../models/character.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Observable} from 'rxjs';

import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-existing-characters',
  templateUrl: './existing-characters.component.html',
  styleUrls: ['./existing-characters.component.css']
})
export class ExistingCharactersComponent implements OnInit {
  characters1?: CharacterModel[];

  characters!: Observable<CharacterModel[]>
  constructor(public charService:CharactersService,public afAuth:AngularFireAuth, public user:UserService) {


  }

 


  ngOnInit(): void {
    this.reloadCharacters();
 
  }

  reloadCharacters(){
   this.characters = this.charService.returnCharacters()
  }
  
  deleteCharacter(character:CharacterModel){
    
    console.log(this.charService.deleteCharacter(character.id))
  }

}
