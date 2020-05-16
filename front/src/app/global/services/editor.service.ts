import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Editor from '../models/Editor';

const ENDPOINT = 'editor';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  baseUrl = environment.baseUrl; // base de l'url utilisable dans les requetes

  constructor(private http: HttpClient) {
  }

  getAllEditors() {
    return this.http.get<Editor[]>(`${this.baseUrl}/${ENDPOINT}/find-all`);
  }

  addEditor(name: string) {
    return this.http.post<Editor>(`${this.baseUrl}/${ENDPOINT}/add-editor` , name);
  }
}
