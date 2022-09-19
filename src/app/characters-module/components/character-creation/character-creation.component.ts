import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, NgForm } from '@angular/forms';
import { CharacterModel } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  isLinear = true;

  //------
  constructor(private formBuilder: FormBuilder, private charService: CharactersService) { }
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

 

}
