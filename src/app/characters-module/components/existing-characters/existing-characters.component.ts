import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CharacterModel } from '../../models/character.model';
@Component({
  selector: 'app-existing-characters',
  templateUrl: './existing-characters.component.html',
  styleUrls: ['./existing-characters.component.css']
})
export class ExistingCharactersComponent implements OnInit {
  characters?: CharacterModel[];
  characters1?: CharacterModel[];
  constructor(private charService:CharactersService) { }

  ngOnInit(): void {
    this.characters = this.charService.returnExistingCharacters();
    this.charService.returnFRChars().subscribe((res:CharacterModel[])=>{this.characters1 = res})
  }

}
