import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {

  arrUser : User[] = [];
  constructor(private userService : UserserviceService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(res => {
     
      console.log('User Array Data',res);
      this.arrUser=res;
    })
  }

}

