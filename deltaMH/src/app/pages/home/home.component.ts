import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hide = false;
  display_message = "";
  constructor() { }

  ngOnInit() {
    this.hide = false;
  }

  hideDiv0(){
    this.hide = true;
    this.display_message = "Take a deep breath. You can do this.";
  }

  hideDiv1(){
    this.hide = true;
    this.display_message = "Relax. You have it in the bag. Don't stress yourself out.";
  }

  hideDiv2(message){
    this.hide = true;
    this.display_message = "Almost there! Don't give up!";
  }

  hideDiv3(message){
    this.hide = true;
    this.display_message = "It's awesome to see you happy like this!";
  }

  hideDiv4(message){
    this.hide = true;
    this.display_message = "Come on! Do some jumping jacks! You'll feel the fun after.";
  }

  hideDiv5(message){
    this.hide = true;
    this.display_message = "Go get something delicious! You deserve it.";
  }

}
