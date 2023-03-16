import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebasepost',
  templateUrl: './firebasepost.component.html',
  styleUrls: ['./firebasepost.component.css']
})
export class FirebasepostComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) {

   }

  ngOnInit() {
  }
  createPost(){
    this.firebaseService.createPosts().subscribe(res =>{
      console.log('Firebase Post Method',res);
      
    })
  }

  getData(){
    this.firebaseService.getPostDataFirebase().subscribe(res =>{
      console.log('Firebase gate',res);
      
    })
  }

}
