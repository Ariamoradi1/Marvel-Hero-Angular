import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data : any
  constructor(private http : HttpClient) {}

  ngOnInit(){
    this.http.get('../assets/i18n/en.json').subscribe(
      (res : any) => {
        this.data = res
      }
    )
  }
}
