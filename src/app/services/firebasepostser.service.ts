import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebasepostserService {


url = 'https://angularb5-default-rtdb.firebaseio.com/';

  constructor(private httpClient :HttpClient) { }

  createPost(){
    let postDate = {
      title : 'This is firebase example',
      content : 'We are calling angular post method'
    }

   return this.httpClient.post(this.url + 'posts.json',postDate);
  }
  getPostDataFirebase(){
    return this.httpClient.get(this.url + 'posts.json');
  }
}
