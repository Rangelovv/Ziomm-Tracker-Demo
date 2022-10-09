import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerCoreComponent } from './components/tracker-core/tracker-core.component';
import { TrackerRoutingModule } from './routing/tracker/tracker-routing.module';
import { MaterialModule } from '../material-module/material.module';
import { CharactersService } from '../characters-module/services/characters.service';
import { TurnsTrackerComponent } from './components/turns-tracker/turns-tracker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackerComponent } from './components/health/tracker.component';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';
@NgModule({
  declarations: [
    TrackerCoreComponent,
    TrackerComponent,
    TurnsTrackerComponent,
    CheatsheetComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  
})
export class TrackerModule { }
