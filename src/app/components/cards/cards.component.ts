import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  news: any = [];
  images = "https://play-lh.googleusercontent.com/OABfRfKxyvf6PUg_6YBJXvbKSbegFsBKvFDEm5jOA0rC5k1la-OwmnWz6GK55vr3EGA";
  n = 0;

  constructor(private http: HttpClient) {
    this.loadNews();
  }

  ngOnInit() {}

  loadNews(){
    this.http.get('assets/dummyData.json').subscribe(data => {
      this.news = data;
    })
    // this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
    //   this.images = data;
    // })
  }

}
