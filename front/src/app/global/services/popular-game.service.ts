import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const ENDPOINT = 'popular-game';

@Injectable({
  providedIn: 'root'
})
export class PopularGameService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

  /**
   * return all offers stored in database
   */
  public get3populars() {
    return this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/last-3`).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }

  /**
   * Save an offer into Database
   * @param offer
   */
  public addPopularGame(data: any) {
    return this.http.post<any>(`${this.baseUrl}/${ENDPOINT}/add-popular`, data).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }
}