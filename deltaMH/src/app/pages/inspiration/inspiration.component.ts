import { Component, OnInit } from '@angular/core';

var globalQuote = "";

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {
  theQuote = "";

  constructor() { this.theQuote = "" }

  ngOnInit() {
    globalQuote = "A great day begins with inspiration";
  }

  

  async getquoteAPI(){
    
      const response = await fetch("https://type.fit/api/quotes");
      const json = await response.json();
      console.log(json);
      return json;
  }

  async getquote(){
    this.getquoteAPI().then(full => {

      this.theQuote = full[Math.floor(Math.random() * 100)].text;
    })
  }
}
