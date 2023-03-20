import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liginform',
  templateUrl: './liginform.component.html',
  styleUrls: ['./liginform.component.css']
})
export class LiginformComponent implements OnInit {
msg;
  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit() {
  }
  login(username,password){
    let res = this.authService.checkuser(username,password);

    if(res == true){
      this.route.navigate(['./product'])
    }else{
      this.msg = 'invalid usernaame or password';
    }
  }

}
