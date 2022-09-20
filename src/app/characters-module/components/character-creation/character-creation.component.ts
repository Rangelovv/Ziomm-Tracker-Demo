import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, NgForm, Validators } from '@angular/forms';
import { CharacterModel } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  isLinear = true;

  //------
  constructor(private formBuilder: FormBuilder, private charService: CharactersService, private snackBar:MatSnackBar) { }
  ngOnInit(): void {}


  //------
  charachterAddForm2 = new FormGroup({
    name: new FormControl(''),
    tribe: new FormControl(''),
    totalHP: new FormControl(''),
    headHP: new FormControl(''),
    bodyHP: new FormControl(''),
    rarmHP: new FormControl(''),
    larmHP: new FormControl(''),
    rlegHP: new FormControl(''),
    llegHP: new FormControl(''),
    movementSpeed: new FormControl(''),
    stamina: new FormControl(''),
  })
  //------
  onSubmit(){
    let character: CharacterModel = {
      name: this.charachterAddForm2.value.name,
      tribe: this.charachterAddForm2.value.tribe,
      totalHP: this.charachterAddForm2.value.totalHP,
      headHP: this.charachterAddForm2.value.headHP,
      bodyHP: this.charachterAddForm2.value.bodyHP,
      rarmHP: this.charachterAddForm2.value.rarmHP,
      larmHP: this.charachterAddForm2.value.larmHP,
      rlegHP: this.charachterAddForm2.value.rlegHP,
      llegHP: this.charachterAddForm2.value.llegHP,
      movementSpeed: this.charachterAddForm2.value.movementSpeed,
      stamina: this.charachterAddForm2.value.stamina,
    }
    this.charService.addCharacter(character)
    this.charachterAddForm2.reset()
  }



    //------
  openSnackBar(){
    let snackBarRef = this.snackBar.open('Character has been created', 'Dismiss',{duration:5000});
  }
 

}
