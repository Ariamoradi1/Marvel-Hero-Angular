import { Component } from '@angular/core';
import { GetService } from '../get.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
  series:any
  constructor(private comics : GetService) {}

  ngOnInit(){
      this.comics.getComics().subscribe(
      (res : any) => {
        this.series = res.data.results
      }
    )
  }


}
