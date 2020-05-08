import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Category from '../models/Category';

const ENDPOINT = 'category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

  /**
   * return all categories stored in database
   */
  public getAllCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/${ENDPOINT}/find-all`);
  }

  /**
   * return specified category stored in database
   * @param id
   */
  public findCategoryById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${ENDPOINT}/find-id/` + id).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }

  /**
   * Save a category into Database
   * @param category
   */
  public addCategory(category: Category) {
    return this.http.post<any>(`${this.baseUrl}/${ENDPOINT}/add-category`, category).subscribe(data => {
      // console.log("data:", data),
      data = data;
    }, error => {console.log("Error", error);
    });
  }
}
