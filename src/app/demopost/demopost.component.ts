import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPost : Post[] =[];
  constructor( private postService : PostService) { }

  ngOnInit() {
this.postService.getPost().subscribe(res => {
  
console.log('Post array data',res);
this.arrPost=res;
})

  }

}
