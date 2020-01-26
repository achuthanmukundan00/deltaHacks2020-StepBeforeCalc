import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calm',
  templateUrl: './calm.component.html',
  styleUrls: ['./calm.component.scss']
})
export class CalmComponent implements OnInit {
  playpath = "";
  musiccount = 0;
  constructor() { }

  ngOnInit() {
    this.musiccount = Math.floor(Math.random() * 5);
    this.playpath = "../../../assets/track" + this.musiccount + ".mp3";
  }

  changetrack(){
    
  }

}
