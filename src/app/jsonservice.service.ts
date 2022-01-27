import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor(private httpClient:HttpClient) { }

  myapi = "http://localhost:3000/products";

  getAllProducts():Observable<any>{
    return this.httpClient.get(`${this.myapi}`);
  }

  getProductById(id:any):Observable<any>{
    let ids = id;
    return this.httpClient.get(`${this.myapi}/${ids}`);
  }
}
