import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from 'src/app/characters-module/services/characters.service';
import { CharacterModel } from 'src/app/characters-module/models/character.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LogModel } from 'src/app/characters-module/models/turn.model';
import { LogService } from 'src/app/characters-module/services/log.service';
@Component({
  selector: 'app-tracker-core',
  templateUrl: './tracker-core.component.html',
  styleUrls: ['./tracker-core.component.css']
})
export class TrackerCoreComponent implements OnInit {

  trackingCharacters!: CharacterModel[];
  logger!: LogModel[]

  constructor(private trcharService:CharactersService, private logService: LogService ) { }

  ngOnInit(): void {

      //getting the charachters
      this.trackingCharacters = this.trcharService.returnActiveCharacters();
      this.logger = this.logService.returnLog();

    
      
  }
  
    
}
