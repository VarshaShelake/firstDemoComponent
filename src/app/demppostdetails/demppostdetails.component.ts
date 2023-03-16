import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demppostdetails',
  templateUrl: './demppostdetails.component.html',
  styleUrls: ['./demppostdetails.component.css']
})
export class DemppostdetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private postService : PostService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.postService.getPostById(id).subscribe(res =>{
      console.log('get post by id',res);
      
    });
    console.log('ActivatedRoute Id :',id);
    
  }

}
