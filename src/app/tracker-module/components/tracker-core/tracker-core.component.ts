import { Component, OnInit } from '@angular/core';
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

  health!: number;
  currentHealth!:number;
  isMaxHealth:boolean = true;
  
  constructor(private trcharService:CharactersService) { }

  ngOnInit(): void {

      //getting the charachters
      this.trackingCharacters = this.trcharService.returnCopyCharacters();

      //assigning charachters properties
      for(let p of this.trackingCharacters){
        this.health =  p.totalHP
      }
      
      //current stats
      this.currentHealth = this.health


      if(this.currentHealth == this.health){
        this.isMaxHealth = true
      }
   

    }

    //Stats Modifiers
  hpUp(){
    if(this.isMaxHealth == false){
      this.currentHealth = this.currentHealth + 1
    }
    if(this.currentHealth == this.health){
      this.isMaxHealth = true
    }
  }
  hpDown(){
    this.currentHealth = this.currentHealth - 1
    this.isMaxHealth = false
  }
  
}
