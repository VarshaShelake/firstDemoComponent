import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  // templateUrl: './test1.component.html',
  template:`<h4 class="testcolor">This is my test1 component 1st element</h4>  <h4>This is my test1 component 2nd element</h4>`,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
