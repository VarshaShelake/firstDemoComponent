import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
 
   title:string='Top 3 bolywood movies'

   movies:Movie[]=[
    {title:'3 Idiots',director:'Rajkumar',cast:'Amir',releaseDate:'2009'},
    {title:'Pavankhind',director:'ABC',cast:'Ajay',releaseDate:'2017'},
    {title:'Tanaji',director:'xyz',cast:'Ajay',releaseDate:'2019'}
   ];

   favSongs:string[]=['jay hari vithal','ram krushna hari','jay jay hari']

   coutries:string[]=['India','US','UK']

   IndiaStates:string[]=['Maharastra','Gujrat']

   USStates:string[]=['New York','California','Washington' ]

   UKStates:string[]=[ 'Landon','Birmindham']
   
  constructor() { }
  // ','Andhra Pradesh','Rajasthan'
  ngOnInit() {
  }

}
