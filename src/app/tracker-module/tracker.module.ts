import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerCoreComponent } from './components/tracker-core/tracker-core.component';
import { TrackerRoutingModule } from './routing/tracker/tracker-routing.module';
import { MaterialModule } from '../material-module/material.module';
import { CharactersService } from '../characters-module/services/characters.service';
@NgModule({
  declarations: [
    TrackerCoreComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    MaterialModule
  ],
  
})
export class TrackerModule { }
