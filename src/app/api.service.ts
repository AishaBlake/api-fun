import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://teamtreehouse.com/aishablake.json';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiUrl);
  }
}
