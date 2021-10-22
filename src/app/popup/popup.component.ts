import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  // @Input() popup = false;
  @Input() currentData:any;
  movieName=""


  @Output() disableEvent = new EventEmitter<string>();

  constructor() { 
    // console.log(this.popup)
  }

  ngOnInit() {
    if(this.currentData){
      this.movieName = this.currentData.name
      
      console.log(this.movieName)
    }
  }


  disablePopup(){
    this.disableEvent.emit("true");
  }

}
