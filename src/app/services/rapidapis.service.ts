import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapisService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';

  constructor(private httpClient : HttpClient) { }

  getFinance(){
    let headers = new HttpHeaders ({
       'X-RapidAPI-Key': 'fc6c6d71cemsh8e235dd340b3b97p1b3ac9jsna999f9b34819',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    });
    
    return this.httpClient.get(this.url,{headers : headers});
    }

  }

