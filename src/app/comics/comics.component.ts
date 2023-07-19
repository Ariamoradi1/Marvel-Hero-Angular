import { Component } from '@angular/core';
import { GetService } from '../get.service';
import { Observable, filter, mergeMap, of } from 'rxjs';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
  series:any
  math : number | undefined;
  obs$ = of(of(of(of(of(of(9,4,5,12))))))
  res : number | undefined;
  constructor(private comics : GetService) {}

  ngOnInit(){
      this.comics.getComics().subscribe(
      (res : any) => {
        this.series = res.data.results
      }
    )
    const handle = this.obs$.pipe(
      mergeMap(i => i),
      mergeMap(i => i),
      mergeMap(i => i),
      mergeMap(i => i),
      mergeMap(i => i),
      filter(i => i > 6)
    ).subscribe(i => console.log(i))
  }
  public pass(){
    const math = Math.floor(Math.random()*100000)
    this.math = math
  }


}
