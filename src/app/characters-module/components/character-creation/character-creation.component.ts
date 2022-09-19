import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, NgForm } from '@angular/forms';
import { Heros } from 'src/app/dummy-data/sidenav.config';
import { CharacterModel } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private charService: CharactersService) { }
  ngOnInit(): void {}

  charachterAddForm = this.formBuilder.group({
    name: '',
    tribe:''
  });

  onSubmit(){
    console.log(this.charachterAddForm.value)
    let character: CharacterModel = {
      name: this.charachterAddForm.value.name,
      tribe: this.charachterAddForm.value.tribe
    }
    this.charService.addCharacter(character)
    this.charachterAddForm.reset()
  }

}
