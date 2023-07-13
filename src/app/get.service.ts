import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseUrl,limit,timeSamp,apiKey,hashUrl,comicBaseUrl,comicLimit } from './Api/api';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(public http : HttpClient,) { }

  getHomeData(){
   return this.http.get(baseUrl + limit + timeSamp + apiKey + hashUrl)
  }
  getComics(){
   return this.http.get(comicBaseUrl + comicLimit + timeSamp + apiKey + hashUrl)
  }
}
