import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckinMapComponent} from './checkin-map/checkin-map.component';
import {DataRoutingModule} from "./data-routing.module";
import {CheckinMapService} from "./checkin-map/checkin-map.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [CheckinMapComponent],
  imports: [
    DataRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    CheckinMapService
  ]
})
export class DataModule {
}
