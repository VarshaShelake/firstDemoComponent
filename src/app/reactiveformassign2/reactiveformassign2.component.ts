import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveformassign2',
  templateUrl: './reactiveformassign2.component.html',
  styleUrls: ['./reactiveformassign2.component.css']
})
export class Reactiveformassign2Component implements OnInit {

  reactiveFormAssign2 : FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    
  }

}
