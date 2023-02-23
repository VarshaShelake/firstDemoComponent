import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

employee:Employee;
  @Input () child :string;

//@Output () fromChild: EventEmitter<string>=new EventEmitter<string>();

@Output () objFromChild:EventEmitter<Employee>=new EventEmitter<Employee>();
  count:number=0;

  constructor() { 

  }

  ngOnInit() {
    console.log(this.child);
    
  }

  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
  
  firstName :string = 'Rocky';


  fName : string = 'Varsha';
  lName:string='Shelake';
  MobileNo:string='9503032415';
  emailId:string='shelakevn@gmail.com';
  city:string='Pune-Nigdi';
  Pincode:string='411062';

  lastname: string = 'Bhai';

onButtonClick() {
let counts=this.count+=1;
console.log(counts);


  // console.log('Button was clicked');
  
  }
  sendToParent() {
    // this.fromChild.emit(this.lastname);
    // this.fromChild.emit(this.fName);
    // this.fromChild.emit(this.lName);
    // this.fromChild.emit(this.MobileNo);
    // this.fromChild.emit(this.emailId);
    // this.fromChild.emit(this.city);
    // this.fromChild.emit(this.Pincode);
    this.employee=new Employee()
    this.employee.name='Codemind';
    this.employee.salary=1000000;
    this.objFromChild.emit(this.employee)
  }
  
  

}

