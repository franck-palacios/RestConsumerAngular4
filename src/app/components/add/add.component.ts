import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public categories = [
    {
      name: "Category 1",
      id: 1,
      description: "Bla bla bla"
    },
    {
      name: "Category 2",
      id: 2,
      description: "Ble ble ble"
    },
    {
      name: "Category 3",
      id: 3,
      description: "Bli bli bli"
    }
  ];
  public article: any = {};

  constructor(private api :ApiService) { }

  ngOnInit() {
  }

  saveData(){
    console.log("=======", this.article);
    let url = "articles";
    this.api.post(url, this.article).subscribe(
      answer=>{
        console.log("This is the answer: ", answer);
        this.article={};
      }
    )
  }

}
