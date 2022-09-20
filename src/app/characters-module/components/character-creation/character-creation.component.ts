import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, NgForm } from '@angular/forms';
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
  charachterAddForm = this.formBuilder.group({
    name: '',
    tribe:''
  });


  //------
  onSubmit(){
    let character: CharacterModel = {
      name: this.charachterAddForm.value.name,
      tribe: this.charachterAddForm.value.tribe
    }
    this.charService.addCharacter(character)
    this.charachterAddForm.reset()
  }

  openSnackBar(){
    let snackBarRef = this.snackBar.open('Message archived', 'Dismiss', {duration:5000});

  }
 

}
