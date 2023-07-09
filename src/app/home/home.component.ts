import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datas:any
  constructor(private http : HttpClient) {}

  ngOnInit(){
    this.http.get(`https://gateway.marvel.com:443/v1/public/characters?limit=12&ts=1&apikey=72befce71d3585a9c9534f88d3bb8625&hash=f264f667c7beafdae1e0b90ada06788f`).subscribe(
      (res : any) => {
        this.datas = res.data.results
      }
    )
  }
}
