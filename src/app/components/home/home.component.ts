import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  public articles: any = [];

  ngOnInit() {
    this.getData("articles");
  }

  getData(url: string) {
    this.api.get(url).subscribe(
      answer => {
        this.articles = answer;
        console.log("=====>>>", this.articles);
      }
    )
  }

}
