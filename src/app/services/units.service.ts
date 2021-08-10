import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor( 
    private http: HttpClient
  ) { }

  API_URL = environment.API_URL;

  url_get_units = this.API_URL + "unidades";

  getUnits(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url_get_units, httpOptions);
  }
}
