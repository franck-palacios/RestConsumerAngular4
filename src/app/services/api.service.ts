import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  
  public domain :string ="http://localhost:3000/";

  constructor(private http: Http) { }

  get(url:string){
    let endPoint = this.domain+ url;
    return this.http.get(endPoint).map(
      answer =>{
        return answer.json();
      }
    )
  }

  post(url:string, data:any){
    let endPoint= this.domain+url;
    let headers = new Headers({'Content-Type':'application/json'});
    let body = JSON.stringify(data);
    return this.http.post(endPoint, body, {headers}).map(
      answer=>{
        return answer.json();
      }
    )
  }

}
