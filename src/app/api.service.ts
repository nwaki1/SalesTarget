import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization : environment.authkey})
  };

  // OPTIONS http://localhost/WebApiCorsServer/Resources/1 HTTP/1.1
  // Host: localhost
  // Access-Control-Request-Method: GET
  // Origin: http://localhost:55912
  // Access-Control-Request-Headers: authorization
  // Accept: */*

  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<any> { //utk declare function yg belum tentu ad hasil. ex http
    return this.httpClient.get(`https://api.jsonbin.io/b/5e6b585c07f1954acedf3c43`);
  }

  getEmployee(): Observable<any> {
    return this.httpClient.get(environment.url + 'Employee/GetAll', this.httpOptions);
  }

  GetProgressSalesman(employeeid): Observable<any> {
    return this.httpClient.get( environment.url + 'SalesTarget/GetProgressSalesman/' + employeeid , this.httpOptions);
  }

  GetSalesByEmployeeId(employeeid, datefrom, dateto): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get( environment.url + 'SalesTarget/GetSalesByEmployeeId/' + employeeid + '?DateFrom=' +  datefrom + '&DateTo=' + dateto, this.httpOptions);
  }
}