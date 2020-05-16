import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Author from '../models/Author';

const ENDPOINT = 'author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

  getAllAuthors() {
    return this.http.get<Author[]>(`${this.baseUrl}/${ENDPOINT}/find-all`);
  }

  addAuthor(name: string) {
    return this.http.post<Author>(`${this.baseUrl}/${ENDPOINT}/add-author` , name);
  }

  findAuthorByName(name: string) {
    return this.http.get<Author>(`${this.baseUrl}/${ENDPOINT}/find-name/` + name);
  }
}
