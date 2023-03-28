import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
  users : any
  names = 'aria'

  comics = [
    {id:1, img:'../assets/comic1.jpg',path:'https://www.marvel.com/comics/issue/107676/women_of_marvel_2023_1', name:'Women of Marvel #1',writer:'Durso'},
    {id:2, img:'../assets/comic2.jpg',path:'https://www.marvel.com/comics/issue/107440/she-hulk_2022_11', name:'She-Hulk #11',writer:'Rowell, Genolet'},
    {id:3, img:'../assets/comic3.jpg',path:'https://www.marvel.com/comics/issue/106473/wasp_2023_3', name:'Wasp #3',writer:'Ewing'},
    {id:4, img:'../assets/comic4.jpg',path:'https://www.marvel.com/comics/issue/105925/avengers_rage_of_ultron_-_marvel_tales_2023_1', name:'Avengers: Rage Of Ultron - Marvel Tales #1',writer:'Remender'},
    {id:5, img:'../assets/comic5.jpg',path:'https://www.marvel.com/comics/issue/105918/avengers_facsimile_edition_2023_9', name:'Avengers: Facsimile Edition #9',writer:'Lee'},
    {id:6, img:'../assets/comic6.jpg',path:'https://www.marvel.com/comics/issue/105871/storm_the_brotherhood_of_mutants_2023_2', name:'Storm & the Brotherhood of Mutants #2',writer:'Vito'},
    {id:7, img:'../assets/comic7.jpg',path:'https://www.marvel.com/comics/issue/105848/doctor_strange_2023_1', name:'Doctor Strange #1',writer:'Mackay'},
    {id:8, img:'../assets/comic8.jpg',path:'https://www.marvel.com/comics/issue/105616/carnage_2022_11', name:'Carange #11',writer:'Paknadel, Roge Antonio'},
    {id:9, img:'../assets/comic9.jpg',path:'https://www.marvel.com/comics/issue/103063/star_wars_darth_vader_2020_32', name:'Star Wars: Darth Vader #32',writer:'Robertson'},
    {id:10, img:'../assets/comic10.jpg',path:'https://www.marvel.com/comics/issue/103036/spider-man_the_lost_hunt_2022_5',name:'Spider-Man: The Lost Hunt #5',writer:'J.M. DeMatteis, Messias'},
  ]
}
