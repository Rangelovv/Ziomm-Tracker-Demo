import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './components/characters/characters.component';
import { CharachtersRoutingModule } from './routing/charachters.routing/charachters.routing-routing.module';
import { MaterialModule } from '../material-module/material.module';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { ExistingCharactersComponent } from './components/existing-characters/existing-characters.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCreationComponent,
    ExistingCharactersComponent
  ],
  imports: [
    CommonModule,
    CharachtersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CharactersModule { }
