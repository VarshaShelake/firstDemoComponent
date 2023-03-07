import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexamples',
  templateUrl: './pipeexamples.component.html',
  styleUrls: ['./pipeexamples.component.css']
})
export class PipeexamplesComponent implements OnInit {

  presentDate=new Date();
  price : number =5000;

  countLenght :number=500;
  employee ={
    id :1,
    name :'abc'
  }
  constructor() { }

  ngOnInit() {
    console.log(this.presentDate);
    
  }

}
