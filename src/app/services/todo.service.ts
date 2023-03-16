import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

apiUrl = 'http://localhost:3000/todo';

  constructor(private httpClient : HttpClient) { 

  }

  create(data : any){
    return this.httpClient.post(this.apiUrl,data);
  }
}
