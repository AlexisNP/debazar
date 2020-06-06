import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const ENDPOINT = 'best-game';

@Injectable({
  providedIn: 'root'
})
export class BestGameService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

  /**
   * return all offers stored in database
   */
  public getbest() {
    return new Promise((resolve, reject) => {
        this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/last`).subscribe(data => {
            resolve(data)
        }, err => {
            reject(err)
        })
    })
  }

  /**
   * Save an offer into Database
   * @param offer
   */
  public addBestGame(data: any) {
    return this.http.post<any>(`${this.baseUrl}/${ENDPOINT}/add`, data).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }
}