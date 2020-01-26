import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inspiration",
  templateUrl: "./inspiration.component.html",
  styleUrls: ["./inspiration.component.scss"]
})
export class InspirationComponent implements OnInit {
  theQuote = "";
  theAuthor = "";

  constructor() {}

  ngOnInit() {
    this.getQuote();
  }

  async getQuoteAPI() {
    const response = await fetch("https://type.fit/api/quotes");
    const json = await response.json();
    return json;
  }

  async getQuote() {
    this.getQuoteAPI().then(full => {
      let qindex = Math.floor(Math.random() * 100);
      this.theQuote = full[qindex].text;
      this.theAuthor = full[qindex].author;
    });
  }
}
