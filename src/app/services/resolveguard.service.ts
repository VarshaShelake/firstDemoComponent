import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResolveguardService {

  apiUrl='https://jsonplaceholder.typicode.com/users';

  product = [
    { name : 'laptop' , id : '101'},
    { name : 'tv' , id : '102'}
  ]

  constructor(private httpClient : HttpClient) { }

  getUsers(){
     return this.httpClient.get(this.apiUrl);
  }
}
