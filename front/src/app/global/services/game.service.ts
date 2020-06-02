import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import Game from '../models/Game';

const ENDPOINT = 'game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

  /**
   * return all games stored in database
   */
  public getAllGames = () => {
    return new Promise((resolve, reject) => {
        this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-all`).subscribe(data => {
            resolve(data)
        }, err => {
            reject(err)
        })
    })
  }

    /**
     * return one game
     * @param id
     */
    public findGameById = (id: number) => {
        return new Promise((resolve, reject) => {
            this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-id/` + id).subscribe(data => {
                resolve(data)
            }, err => {
                reject(err)
            })
        })
    }

  /**
   * Save game into Database
   * @param game
   */
  public addGame(game: any) {
    return this.http.post<any>(`${this.baseUrl}/${ENDPOINT}/add-game`, game).subscribe(data => {
      console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }

  /**
   * Update a game
   * @param id
   * @param game
   */
  public updateGame(id: number, game: Game) {
    return this.http.put<any>(`${this.baseUrl}/${ENDPOINT}/edit-game` + id , game).subscribe(data => {
      // console.log("data:", data),
      data = game;
    }, error => {console.log("Error", error);
    });
  }

  /**
   * Remove a game from Database
   * @param id
   */
  public deleteGame(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${ENDPOINT}/remove-game` + id).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }
}
