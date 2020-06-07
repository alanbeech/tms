import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckinMapComponent} from "./checkin-map/checkin-map.component";


const routes: Routes = [
  {
    path: 'checkin-map',
    component: CheckinMapComponent
  },
  {
    path: '',
    redirectTo: 'checkin-map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule {
}
