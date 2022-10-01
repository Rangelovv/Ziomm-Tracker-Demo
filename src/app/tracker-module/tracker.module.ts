import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerCoreComponent } from './components/tracker-core/tracker-core.component';
import { TrackerRoutingModule } from './routing/tracker/tracker-routing.module';
import { MaterialModule } from '../material-module/material.module';
import { CharactersService } from '../characters-module/services/characters.service';
import { HealthComponent } from './components/health/health.component';
import { TurnsTrackerComponent } from './components/turns-tracker/turns-tracker.component';
@NgModule({
  declarations: [
    TrackerCoreComponent,
    HealthComponent,
    TurnsTrackerComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    MaterialModule
  ],
  
})
export class TrackerModule { }
