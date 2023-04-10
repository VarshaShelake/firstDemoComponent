import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolveguardService } from '../services/resolveguard.service';

@Component({
  selector: 'app-resolveguarduser',
  templateUrl: './resolveguarduser.component.html',
  styleUrls: ['./resolveguarduser.component.css']
})
export class ResolveguarduserComponent implements OnInit {

usersDetails : any;

  // constructor(private resolveGuardUserService : ResolveguardService) { }

  constructor(private activateRoute : ActivatedRoute ) { }

  ngOnInit() {
this.usersDetails = this.activateRoute.snapshot.data['data'];
console.log('resolve data before route',this.usersDetails);


    // this.usersDetails = this.resolveGuardUserService.product;
    // console.log('Resolve guard example',this.usersDetails);
    
  }

}
