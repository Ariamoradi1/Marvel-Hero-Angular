import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
  series:any
  constructor(private http : HttpClient) {}

  ngOnInit(){
    this.http.get(`https://gateway.marvel.com:443/v1/public/series?limit=10&ts=1&apikey=72befce71d3585a9c9534f88d3bb8625&hash=f264f667c7beafdae1e0b90ada06788f`).subscribe(
      (res : any) => {
        this.series = res.data.results
        console.log(this.series)

      }
    )
  }
}
