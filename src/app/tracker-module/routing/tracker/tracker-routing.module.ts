import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackerCoreComponent } from '../../components/tracker-core/tracker-core.component';

const routes: Routes = [
  {
    path:"",
    component: TrackerCoreComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
