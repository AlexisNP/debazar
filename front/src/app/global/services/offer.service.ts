import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../models/Offer';

const ENDPOINT = 'offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

    /**
     * return all offers stored in database
     */
    public getAllOffers = () => {
        return new Promise((resolve, reject) => {
            this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-all`).subscribe(data => {
                resolve(data)
            }, err => {
                reject(err)
            })
        })
    }

  /**
   * return specified offer stored in database 
   * @param id
   */
  public findOfferById = (id: number) => {
    return new Promise((resolve, reject) => {
        this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-id/` + id).subscribe(data => {
            resolve(data)
        }, err => {
            reject(err)
        })
    })
  }

  /**
   * return specified offer stored in database 
   * @param id
   */
  public findOfferByName = (name: string) => {
    return new Promise((resolve, reject) => {
        this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-name/` + name).subscribe(data => {
            resolve(data)
        }, err => {
            reject(err)
        })
    })
  }

  /**
   * return offers stored in database with specific game category
   * @param id
   */
  public findOfferByCategory = (id: number) => {
    return new Promise((resolve, reject) => {
        this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-category/` + id).subscribe(data => {
            resolve(data)
        }, err => {
            reject(err)
        })
    })
  }

  /**
   * return offers stored in database from specified seller
   * @param id
   */
  public findOfferBySeller = (id: number) => {
    return new Promise((resolve, reject) => {
        this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-seller/` + id).subscribe(data => {
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
  public addOffer(offer: Offer) {
    return this.http.post<any>(`${this.baseUrl}/${ENDPOINT}/add-offer`, offer).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }

  // /**
  //  * Update an offer
  //  * @param id
  //  * @param offer
  //  */
  // public updateOffer(id: number, offer: Offer) {
  //   return this.http.put<any>(`${this.baseUrl}/${ENDPOINT}/edit-offer/` + id , offer).subscribe(data => {
  //     // console.log("data:", data),
  //     data = offer;
  //   }, error => {console.log("Error", error);
  //   });
  // }

  /**
   * Remove an offer from Database
   * @param id
   */
  public deleteOffer(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${ENDPOINT}/remove-offer/` + id).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }
}
