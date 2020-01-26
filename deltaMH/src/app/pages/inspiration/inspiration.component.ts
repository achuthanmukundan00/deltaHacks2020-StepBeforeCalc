import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {
  theQuote = "";
  theAuthor = "";

  constructor() { }

  ngOnInit() {
    this.theQuote = "A great day begins with inspiration";
    this.theAuthor = "the StepB4Calc Team";
  }

  

  async getquoteAPI(){
    
      const response = await fetch("https://type.fit/api/quotes");
      const json = await response.json();
      return json;
  }

  async getquote(){
    this.getquoteAPI().then(full => {
      let qindex = Math.floor(Math.random() * 100);
      this.theQuote = full[qindex].text;
      this.theAuthor = full[qindex].author;
    })
  }
}
