import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class CheckinMapService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  constructor(private http: HttpClient) {
  }

  makeCapitalPopup(data: any): string {
    return `<div>Capital: ${ data.name }</div><div>State: ${ data.state }</div><div>Population: ${ data.population }</div>`
  }

  public getCheckIns(map: L.map) {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);


        marker.bindPopup(this.makeCapitalPopup(c));
      }
    });
  }
}
