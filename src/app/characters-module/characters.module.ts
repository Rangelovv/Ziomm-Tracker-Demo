import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './components/characters/characters.component';
import { CharachtersRoutingModule } from './routing/charachters.routing/charachters.routing-routing.module';
import { MaterialModule } from '../material-module/material.module';



@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharachtersRoutingModule,
    MaterialModule
  ]
})
export class CharactersModule { }
