import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CharacterModel } from '../../models/character.model';
@Component({
  selector: 'app-existing-characters',
  templateUrl: './existing-characters.component.html',
  styleUrls: ['./existing-characters.component.css']
})
export class ExistingCharactersComponent implements OnInit {
  characters1?: CharacterModel[];
  constructor(public charService:CharactersService) { }

  ngOnInit(): void {
    this.charService.returnExistingCharacters().subscribe((res:CharacterModel[])=>{this.characters1 = res})

  }

}
