import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, interval, of, timer } from 'rxjs';
import { map, mergeMap, take, takeLast, takeUntil } from 'rxjs/operators';

interface User {
  id : number;
}

interface Post {
  id : number;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

USERS = 'https://jsonplaceholder.typicode.com/users';

POSTS = 'https://jsonplaceholder.typicode.com/posts';

data : [User[] , Post[]]

  constructor(private httpClient : HttpClient) { 
const users = httpClient.get<User[]>(this.USERS);
const posts = httpClient.get<Post[]>(this.POSTS);

forkJoin([users , posts]).subscribe(res => {
  this.data = res;
  console.log('user and post data',res);
  
})

  }

  ngOnInit() {
    const ofobs = of([1,2,3]);

    ofobs.subscribe(res => {
      console.log('of example',res);
      
    });

    const fromObs = from([1,2,3]);

    fromObs.subscribe( res => {
      console.log('from example',res);
      
    });

    const source = interval(1000);
    source.pipe(take(5)).subscribe(res => {
      console.log('take operator', res);
      
    });

    let randomNames = ['varsha','harshita','pari'];
    const result = from(randomNames);
    result.pipe(takeLast(2)).subscribe(res => {
      console.log('takelast example', res);
      
    });

    const custObs = interval(1000);
    let condition = timer(6000);
    custObs.pipe(takeUntil(condition)).subscribe(res => {
      console.log('take until example',res);
      
    });
    const objs1 = from(['tech','comedy','news']);
    // objs1.pipe(
    //   map(res => this.getData(res))
    //   ).subscribe(res =>res.subscribe(res2 =>{
    //     console.log('mergemap',res2);
    //   }));
    objs1.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      console.log('mergemap example',res);
      
    })
  }
    getData(data){
      return of(data + 'video uploaded')
    }
   

  

}
