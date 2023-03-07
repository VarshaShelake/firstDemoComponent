import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-servicepractice',
  templateUrl: './servicepractice.component.html',
  styleUrls: ['./servicepractice.component.css']
})
export class ServicepracticeComponent implements OnInit {

  person={};
  emp={}
  constructor(private myService : TestService) { }

  ngOnInit() {
    this.person=this.myService.persons;
    this.emp=this.myService.employee;
  }

}
