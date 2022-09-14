import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerCoreComponent } from './components/tracker-core/tracker-core.component';
import { TrackerRoutingModule } from './routing/tracker/tracker-routing.module';


@NgModule({
  declarations: [
    TrackerCoreComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule
  ]
})
export class TrackerModule { }
