import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from 'src/app/characters-module/services/characters.service';
import { CharacterModel } from 'src/app/characters-module/models/character.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tracker-core',
  templateUrl: './tracker-core.component.html',
  styleUrls: ['./tracker-core.component.css']
})
export class TrackerCoreComponent implements OnInit {

  trackingCharacters!: CharacterModel[];

  constructor(private trcharService:CharactersService) { }
  stamina:number = 10

  ngOnInit(): void {

      //getting the charachters
      this.trackingCharacters = this.trcharService.returnActiveCharacters();

    
      
  }
    setSum(data:any){
      this.stamina = data
    }
    
}
