import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  timer : any
   constructor(private route : Router) {}

   ngOnInit(){
   setInterval(() => {
    this.route.navigate(['home'])
    },10000)
   }
}
