import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Languages } from './languges';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'src/app/dashboard/languages.json';

  constructor(private http: HttpClient) { }

    getPlanets() {
      return this.http.get<Languages[]>(this.apiURL);
    }


}
