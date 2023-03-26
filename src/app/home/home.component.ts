import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 product = [
  {id:1, name:'spider man', img:'../assets/spider.jpeg',prof:'../assets/spider.jpeg',path:'https://www.marvel.com/characters/spider-man-peter-parker',title : 'Spider-Man was a radical departure from the established conventions of the comic-book superhero: he was a teenage character who was not relegated to sidekick status beside an older, more-experienced hero. In addition to enhanced speed and strength,'},
  {id:2, name:'hulk', img:'../assets/hulk.webp',prof:'../assets/hulkprof.webp',path:'https://www.marvel.com/characters/hulk-bruce-banner',title : 'The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby,the character first appeared in the debut issue of The Incredible Hulk (May 1962)'},
  {id:3, name:'thor', img:'../assets/thor.jpeg',prof:'../assets/thorprof.webp',path:'https://www.marvel.com/characters/thor-thor-odinson',title : 'Thor (from Old Norse: Þórr) is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.'},
  {id:4, name:'capitan america', img:'../assets/capitan.jpg',prof:'../assets/capitan.jpg',path:'https://www.marvel.com/characters/captain-america-steve-rogers',title : 'Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the peak of human perfection by an experimental "super-soldier serum" after joining the military to aid the United States government'},
  {id:5, name:'iron man', img:'../assets/iron.jpg',prof:'../assets/iron.jpg',path:'https://www.marvel.com/characters/iron-man-tony-stark',title : 'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber.'},
  {id:6, name:'captain marvel', img:'../assets/captan.jpg',prof:'../assets/captan.jpg',path:'https://www.marvel.com/characters/captain-marvel-carol-danvers/in-comics',title : 'Captain Marvel is a 2019 American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,'},
 ]
}
