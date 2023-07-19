import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetService } from '../get.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datas: any;
  constructor(private get : GetService) {}

  ngOnInit(){
   this.get.getHomeData().subscribe(
      (res : any) => {
        this.datas = res.data.results
      }
    )
  }
}
