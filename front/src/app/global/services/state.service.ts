import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const ENDPOINT = 'state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

  /**
   * return all offers stored in database
   */
  public getAllStates() {
    return this.http.get<any>(`${this.baseUrl}/${ENDPOINT}`);
  }
}
