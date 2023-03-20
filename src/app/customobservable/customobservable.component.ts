import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.css']
})
export class CustomobservableComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
    const source = from([1,2,3,4,5,6]);

    const example = source.pipe(filter(num => num % 2 === 0));
    example.subscribe(res =>{
      console.log('Even number' , res);
      });

      const obs = of(1,2,3).pipe(
        map(x => x+1)
        ).subscribe(res => {
          console.log('obs of',res);
          
        })

  }
getData(){
  this.firebaseService.getPostDataFirebase().pipe(
    map(responceData =>{
      console.log('before manipulate data',responceData);
      
      const postArray = [];
      for (const key in responceData) {
        if ( responceData.hasOwnProperty(key)) {
          postArray.push({...responceData[key], id:key})
          
        }
      }
      return postArray;
    })
  ).subscribe(res =>{
    console.log('after manipulate data',res);
    
  })
}
}
