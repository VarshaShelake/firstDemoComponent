import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-userpostdetails',
  templateUrl: './userpostdetails.component.html',
  styleUrls: ['./userpostdetails.component.css']
})
export class UserpostdetailsComponent implements OnInit {
  arruser : any = [];
  constructor(private route : ActivatedRoute, private userService : UserserviceService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(res =>{
      console.log('Get user by id',res);
      this.arruser=res;
    });
    // console.log('Activated Route Id',id);
    
  }

}