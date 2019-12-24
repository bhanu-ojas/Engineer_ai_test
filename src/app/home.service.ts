import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //Service Url link
  serviceUrl ="https://hn.algolia.com/api/v1/search_by_date?tags=story";

  constructor(private http:HttpClient) { }
  //Get details from service link.
  getDetails() {
    return this.http.get(this.serviceUrl);
  }
}
