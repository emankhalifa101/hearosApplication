import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HearosService {

  constructor(private http: HttpClient) { }

  getHEarosList() {
    return this.http.get('/assets/configs/hearosList.json');
  }
  getCounteryList() {
    const url = ' http://countryapi.gear.host/v1/Country/getCountries';
    return this.http.get(url);
  }
  getFilterConfiguration() {
    return this.http.get('/assets/configs/filterConfiguration.json');
  }
 
}
