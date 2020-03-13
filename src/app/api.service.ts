import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<any>{ //utk declare function yg belum tentu ad hasil. ex http
    return this.httpClient.get(`https://api.jsonbin.io/b/5e6b585c07f1954acedf3c43`);
    
  }
}