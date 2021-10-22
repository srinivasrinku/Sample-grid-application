import { Component, OnInit } from '@angular/core';
import moviesData from './../movies.json';


interface Movies {  
  id: Number;  
  name: String;  
  img: String;  
  description: String;  
} 

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
 

export class MoviesListComponent implements OnInit {
  popup = false
  data: any={};
  movies: Movies[] = moviesData;

  constructor() { }

  ngOnInit(): void {

  }

  openDialogue(id:any){
    this.popup = true;
    this.data = this.movies[id-1];
  }

  closeDialogue(event:any){
    this.popup = false;
    this.data={}
  }

}
