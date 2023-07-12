import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  baseUrl : string = `https://gateway.marvel.com:443/v1/public/characters?`
  limit : string = 'limit=12&'
  timeSamp : string = 'ts=1&'
  apiKey : string = 'apikey=72befce71d3585a9c9534f88d3bb8625&'
  hashUrl : string = 'hash=f264f667c7beafdae1e0b90ada06788f'

  //comics data
  comicBaseUrl : string = `https://gateway.marvel.com:443/v1/public/series?`
  comicLimit : string = 'limit=10&'

  constructor(public http : HttpClient) { }

  getHomeData(){
   return this.http.get(this.baseUrl + this.limit + this.timeSamp + this.apiKey + this.hashUrl)
  }
  getComics(){
   return this.http.get(this.comicBaseUrl + this.comicLimit + this.timeSamp + this.apiKey + this.hashUrl)
  }
}
